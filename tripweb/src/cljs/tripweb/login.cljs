(ns tripweb.login  (:use [net.unit8.tower :only [t]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [tripweb.core :as tripcore]
            [tripweb.settings :as settings]
            [ajax.core :refer [GET POST]]
            [om-bootstrap.input :as i]
            [om-bootstrap.button :as b]
            [om-bootstrap.panel :as p]
            
            [tripweb.trips :as trips]
            [tripweb.users :as users]
            [cljs.core.async :refer [put! dropping-buffer chan take! <!]]
  )
  (:import goog.History)
)

(enable-console-print!)

(def ch (chan (dropping-buffer 2)))
(def jquery (js* "$"))
(defonce app-state (atom  {:error "" :modalText "Modal Text" :modalTitle "Modal Title" :state 0} ))


(defn setLoginError [error]
  (swap! app-state assoc-in [:error] 
    (:error error)
  )

  (swap! app-state assoc-in [:modalTitle] 
    (str "Login Error")
  ) 

  (swap! app-state assoc-in [:modalText] 
    (str (:error error))
  ) 

  (swap! app-state assoc-in [:state] 0) 
 
  ;;(.log js/console (str  "In setLoginError" (:error error) ))
  (jquery
    (fn []
      (-> (jquery "#loginModal")
        (.modal)
      )
    )
  )
)


(defn OnLoginError [response]
  (let [     
      newdata { :error (get (:response response)  "error") }
    ]
   
    (setLoginError newdata)
  )
  
  ;(.log js/console (str  response ))
)



(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn menus-to-map [menu]
  (let [     
      newdata {:menucode (get menu "menucode") :menulevel (get menu "menulevel") :menuopt (get menu "menuopt")
               :menuorder (get menu "menuorder") :name (get menu "name") :submenu (get menu "submenu")
               :urltarget (get menu "urltarget")
               }
    ]
    ;(.log js/console newdata)
    newdata
  )
  
)


(defn OnGetSysMenu [response]
  (let [ 
    newdata (map menus-to-map response) 
    ]
    
    (swap! tripcore/app-state assoc-in [:sysmenus]   (into []  newdata) )
    (swap! admin/app-state assoc-in [:sysmenus]   (into []  newdata) )
    (.log js/console newdata)
    (put! ch 45)
    
  )
)

(defn reqsysmenu []
  (GET (str settings/apipath "api/sysmenu") {:handler OnGetSysMenu
                                            :error-handler error-handler
                                            :headers {:content-type "application/json" :Authorization (str "Bearer "  (:token  (first (:token @tripcore/app-state)))) }
                                            })
)

(defn OnGetUser [response]
  (
    let [     
      newdata {:userid (get response "userid") :datemask (get response "datemask") :timemask (get response "timemask")
        :language (get response "language")}
    ]
    (swap! tripcore/app-state assoc-in [:User] newdata )
    (reqsysmenu)
  )
)

(defn OnGetEmployee [response]
  (
    let [     
      newdata {:empid (get (get response "Emphr") "empid")
               :portrait (get (get response "Emphr") "portrait")
               :EmpName (get (get response "Emphr") "EmpName") :Roster (get response "RosterList")  }
    ]
    (swap! tripcore/app-state assoc-in [:Employee] newdata )
  )
)



(defn requser []
  (GET (str settings/apipath "api/user") {
    :handler OnGetUser
    :error-handler error-handler
    :headers {:content-type "application/json" :Authorization (str "Bearer "  (:token  (first (:token @tripcore/app-state)))) }
  })
)

(defn reqemployee []
  (GET (str settings/apipath "api/employee") {:handler OnGetEmployee
                                            :error-handler error-handler
                                            :headers {:content-type "application/json" :Authorization (str "Bearer "  (:token  (first (:token @tripcore/app-state)))) }
                                            })
)




(defn OnLogin [response]
  (
    let [     
      ;;newdata (js->clj response)
      newdata (vector {:token (get response "access_token")  :expires (get response "expires_in") }  
     )


;;[{:Title (get (first response) "Title") :Introduction  (get (first response) "Introduction") :Reference  (get (first response) "Reference") :Updated  (get (first response) "Updated") :Published (get (first response) "Pub;ished")}]
    ]

    (.log js/console (str newdata))
    ;;(.log js/console (str (select-keys (js->clj response) [:Title :Reference :Introduction])  ))    
    (swap! tripcore/app-state assoc-in [:token] newdata )
    (swap! tripcore/app-state assoc-in [:view] 1 )
    (reqemployee)
    (requser)
    

  )
  
  ;;(.log js/console (str  (response) ))
  ;;(.log js/console (str  (get (first response)  "Title") ))

  
  
)

(defn dologin [username password]
  (POST (str settings/apipath "token") {:handler OnLogin
                                            :error-handler OnLoginError
                                            :headers {:content-type "application/x-www-form-urlencoded"}
                                            :body (str "grant_type=password&username=" username "&password=" password) 
                                            })
  (swap! app-state assoc-in [:state] 2)
)




(defn checklogin [owner]
  (let [
    theUserName (-> (om/get-node owner "txtUserName") .-value)
    thePassword (-> (om/get-node owner "txtPassword") .-value)
    ]
    ;(aset js/window "location" "http://localhost:3449/#/something")
    ;(.log js/console owner ) 
    (.log js/console (str  theUserName ))
    (dologin (str theUserName) (str thePassword)) 
  )
)


(defn addModal []
  (dom/div
    (dom/div {:id "loginModal" :className "modal fade" :role "dialog"}
      (dom/div {:className "modal-dialog"} 
        ;;Modal content
        (dom/div {:className "modal-content"} 
          (dom/div {:className "modal-header"} 
                   (b/button {:type "button" :className "close" :data-dismiss "modal"})
                   (dom/h4 {:className "modal-title"} (:modalTitle @app-state) )
                   )
          (dom/div {:className "modal-body"}
                   (dom/p (:modalText @app-state))
                   )
          (dom/div {:className "modal-footer"}
                   (b/button {:type "button" :className "btn btn-default" :data-dismiss "modal"} "Close")
          )
        )
      )
    )
  )
)



(defcomponent login-page-view [data owner]
  (did-update [this prev-props prev-state]
    (.log js/console "starting login screen" ) 
    
  )
  (did-mount [_]
    (.focus (om/get-node owner "txtUserName" ))
  )
  (render
    [_]
    (dom/div {:className "container" :style {:width "100%" :padding-top "283px" :backgroundImage "url(/images/loginbackground.png)" :backgroundSize "cover"}  }
      ;(om/build t5pcore/website-view data {})
      ;(dom/h1 "Login Page")
      ;(dom/img {:src "images/LogonBack.jpg" :className "img-responsive company-logo-logon"})
      (dom/form {:className "form-signin"}
        (dom/input #js {:type "text" :ref "txtUserName"
           :defaultValue  settings/demouser  :className "form-control" :placeholder "User Name" } )
        (dom/input {:className "form-control" :ref "txtPassword" :id "txtPassword"
           :defaultValue settings/demopassword :type "password"  :placeholder "Password"} )
        (dom/button #js {
          :className (if (= (:state @app-state) 0) "btn btn-lg btn-primary btn-block" "btn btn-lg btn-primary btn-block m-progress" )  :type "button" :onClick (fn [e](checklogin owner))} "Login")
        
      )
      (addModal)
      (dom/div {:style {:margin-bottom "200px"}})
    )
  )
)



(defmulti website-view
  (
    fn [data _]
      (:view (if (= data nil) @tripcore/app-state @data ))
  )
)

(defmethod website-view 0
  [data owner] 
  (login-page-view data owner)
)

(defmethod website-view 1
  [data owner] 
  (login-page-view data owner)
)

(sec/defroute login-page "/login" []
  (om/root login-page-view 
           app-state
           {:target (. js/document (getElementById "app"))}))


(defn onReceivedMenus []
  ;(.log js/console (count (:sysmenus @t5pcore/app-state)))
  (swap! app-state assoc-in [:state] 0 )
  (aset js/window "location" "#/eportal")
)

(defn setcontrols [value]
  (case value
    45 (onReceivedMenus)

    (onReceivedMenus)
  )
)

(defn initqueue []
  (doseq [n (range 1000)]
    (go ;(while true)
      (take! ch(
        fn [v] (
           ;(setcalculatedfields) 
           setcontrols v
           ;.log js/console "Core.ASYNVC working!!!" 
          )
        )
      )
    )
  )
)

(initqueue)

(defn main []
  (-> js/document
      .-location
      (set! "#/login"))

  ;(aset js/window "location" "#/login")
)
  
(main)