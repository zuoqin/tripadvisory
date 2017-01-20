(ns tripweb.userdetail  (:use [net.unit8.tower :only [t]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [tripweb.core :as tripcore]
            [ajax.core :refer [GET POST]]
            [clojure.string :as str]
            [om-bootstrap.button :as b]
            [om-bootstrap.panel :as p]
            [om.dom :as omdom :include-macros true]
            [cljs.core.async :refer [put! dropping-buffer chan take! <!]]
            [om-bootstrap.input :as i]
            [cljs-time.core :as tm]
            [cljs-time.format :as tf]
            [tripweb.settings :as settings]
  )
  (:import goog.History)
)

(def jquery (js* "$"))

(enable-console-print!)

(def ch (chan (dropping-buffer 2)))
(defonce app-state (atom  {:login "zorcheal" :password "Q" :roles [{:name "admin"} {:name "manager"} {:name "user"}]  :view 1 :current "User Detail"} ))



(defn onDropDownChange [id value]
  ;(.log js/console () e)
  (swap! app-state assoc-in [:form (keyword id)] value) 
)


(defn setRolesDropDown []
  (put! ch 46) 
  (jquery
    (fn []
      (-> (jquery "#roles" )
        (.selectpicker {})
        (.on "change"
          (fn [e]
            (
              onDropDownChange (.. e -target -id) (.. e -target -value)
            )
          )
        )
      )
    )
  )
)


(defn setNewUserValue [key val]
  (swap! app-state assoc-in [(keyword key)] val)
)



(defn setcontrols [value]
  (case value
    46 (jquery
         (fn []
           (-> (jquery "#payrollgroups" )
             (.selectpicker "val"
               (if (nil? (:payrollgroupid (:employee @app-state)))
                 (:payrollgroups (:form @app-state))
                 (:payrollgroupid (:employee @app-state))                   
               )
             )
           )
         )
       )
  )
)


(defn initqueue []
  (doseq [n (range 1000)]
    (go ;(while true)
      (take! ch(
        fn [v] (
           ;.log js/console v
           ;(setcalculatedfields) 
           setcontrols v
           
           ;(.log js/console v)  
          )
        )
      )
    )
  )
)


(initqueue)

(defn array-to-string [element]
  (let [
      newdata {:empname (get element "empname") } 
    ]
    (:empname newdata)
  )
)

(defn setUser []
    (swap! app-state assoc-in [:id ] 1 ) 
    (swap! app-state assoc-in [:login ]  "zorcheal" ) 
    (swap! app-state assoc-in [:role ]  "manager" ) 
    (swap! app-state assoc-in [:password] "Q" )
)




(defn OnError [response]
  (let [     
      newdata { :error (get (:response response)  "error") }
    ]
    (.log js/console (str  response )) 
    
  )
  
  
)


(defn getUserDetail []
  ;(.log js/console (str "token: " " " (:token  (first (:token @t5pcore/app-state)))       ))
  (if
    (and 
      (not= (:login @app-state) nil)
      (not= (:login @app-state) "")
    )
    (setUser)
  
  )
)

(defn handleFromChange [e]
  ;;(.log js/console e  )  
  (.log js/console "The change ....")

)


(defn onMount [data]
  (swap! app-state assoc-in [:current] 
    "User Detail"
  )
  (getUserDetail)
  ;;(setcontrols)
)


(defn handle-change [e owner]
  ;(.log js/console () e)
  (swap! app-state assoc-in [:form (keyword (.. e -target -id))] 
    (.. e -target -value)
  ) 
)


(defn buildRolesList [data owner]
  (map
    (fn [text]
      (dom/option {:key (:name text) :value (:name text)
                    :onChange #(handle-change % owner)} (:name text))
    )
    (:roles @app-state )
  )
)



(defcomponent userdetail-page-view [data owner]
  (did-mount [_]
    (onMount data)
  )
  (did-update [this prev-props prev-state]
    (.log js/console "Update happened") 

    (put! ch 42)
  )
  (render
    [_]
    (let [style {:style {:margin "10px;" :padding-bottom "0px;"}}
      styleprimary {:style {:margin-top "70px"}}
      ]
      (dom/div
        (om/build tripcore/website-view data {})
        (dom/div {:id "user-detail-container"}
          (dom/span
            (dom/div  (assoc styleprimary  :className "panel panel-default"  :id "divUserInfo")
              (dom/div {:className "panel-heading"}
                (dom/h3 {:className "panel-title"} (:login @app-state))
                
                (dom/h5 "Password: "
                  (dom/input {:id "password" :type "text" :value (:password @app-state)})
                )
                (dom/h5 "Role: "
                  (dom/input {:id "role" :type "text" :value (:role @app-state)})
                )

                (dom/div {:className "form-group"}
                  (dom/p
                    (dom/label {:className "control-label" :for "roles" }
                      "Role: "
                    )
                  
                  )
                 
                  (omdom/select #js {:id "roles"
                                     :className "selectpicker"
                                     :data-show-subtext "true"
                                     :data-live-search "true"
                                     :onChange #(handle-change % owner)
                                     }                
                    (buildRolesList data owner)
                  )            
                )                
              )              
            )
          )
        )
        (dom/nav {:className "navbar navbar-default" :role "navigation"}
          (dom/div {:className "navbar-header"}
            (b/button {:className "btn btn-default"} "Update")
            (b/button {:className "btn btn-danger"} "Delete")
          )
        )
      )
    )

  )
)



(sec/defroute userdetail-page "/userdetail/:login" {login :login}
  (
    (swap! app-state assoc :login login ) 

    (om/root userdetail-page-view
             app-state
             {:target (. js/document (getElementById "app"))})

  )
)