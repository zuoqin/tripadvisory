(ns tripweb.registration  (:use [net.unit8.tower :only [t]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [tripweb.core :as tripcore]
            [tripweb.settings :as settings]
            [ajax.core :refer [GET POST]]
            [om-bootstrap.input :as i]
            [om-bootstrap.button :as b]
            [om-bootstrap.panel :as p]

            [tripweb.userdetail :as userdetail]
            [tripweb.tripdetail :as tripdetail]
            [tripweb.trips :as trips]
            [tripweb.users :as users]
            [cljs.core.async :refer [put! dropping-buffer chan take! <!]]
  )
  (:import goog.History)
)

(enable-console-print!)


(def application
  (js/document.getElementById "app"))

(defn set-html! [el content]
  (aset el "innerHTML" content))


(sec/set-config! :prefix "#")

;; (let [history (History.)
;;       navigation EventType/NAVIGATE]
;;   (goog.events/listen history
;;                      navigation
;;                      #(-> % .-token sec/dispatch!))
;;   (doto history (.setEnabled true)))


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


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))


(defn OnCreateUserError [response]
  (let [     
      newdata {:error (:error (get response (keyword "response") ))  }
    ]
    (setLoginError newdata)
  )
  ;; TO-DO: Delete Trip from Core
  ;;(.log js/console (str  (get (first response)  "Title") ))
)


(defn OnCreateUserSuccess [response]

    (-> js/document
      .-location
      (set! "#/login"))
)

(defn doregister [username password]
  (POST (str settings/apipath  "api/user") {
    :handler OnCreateUserSuccess
    :error-handler OnCreateUserError
    :headers {
      :content-type "application/json" 
      :Authorization (str "Bearer "  "the empty token")}
    :format :json
    :params { :login username :password password :role "user" }})
)




(defn checklogin [owner]
  (let [
    theUserName (-> (om/get-node owner "txtUserName") .-value)
    thePassword (-> (om/get-node owner "txtPassword") .-value)
    ]
    ;(aset js/window "location" "http://localhost:3449/#/something")
    ;(.log js/console owner ) 

    (.log js/console (str  theUserName ))
    (doregister (str theUserName) (str thePassword)) 
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
        (dom/input {:className "form-control" :ref "txtPassword" :id "txtPassword" :defaultValue settings/demopassword :type "password"  :placeholder "Password"} )
        (dom/button #js {
          :className (if (= (:state @app-state) 0) "btn btn-lg btn-primary btn-block" "btn btn-lg btn-primary btn-block m-progress" )  :type "button" :onClick (fn [e](checklogin owner))} "Registration")
        
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


(sec/defroute login-page "/registration" []
  (om/root login-page-view 
           app-state
           {:target (. js/document (getElementById "app"))}
  )
)
