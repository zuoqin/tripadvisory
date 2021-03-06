(ns tripweb.core
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [ajax.core :refer [GET POST]]
            [tripweb.settings :as settings]
            [om.dom :as omdom :include-macros true]

            [om-bootstrap.button :as b]
  )
  (:import goog.History)
)


(enable-console-print!)

;;(defonce app-state (atom {:text "Hello Chestnut!"}))

(defonce app-state (atom {:view 1 :current "Home" :search "" :ismonthly false :users []}))


(def jquery (js* "$"))



(defn doLogout [data]
  (swap! app-state assoc-in [:view]   0 )
)



(defn goUsers [data]
  (swap! app-state assoc-in [:view] 1 )
)


(defcomponent logout-view [_ _]
  (render
   [_]
   (let [style {:style {:margin "10px"}}]
     (dom/div style
       (dom/a (assoc style :href "#/login") 
              "Login"
              )
      )
    )
  )
)


(defn handle-change [e owner]
  ;(.log js/console () e)
  (swap! app-state assoc-in [:form (keyword (.. e -target -id))] 
    (.. e -target -value)
  ) 
)

(defn OnGetTrips [response]
   (swap! app-state assoc-in [(keyword (:selecteduser @app-state)) :trips] response)
)


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)

(defn getTrips [] 
  (GET (str settings/apipath "api/trip?login=" (:selecteduser @app-state) ) {
    :handler OnGetTrips
    :error-handler error-handler
    :headers {
      :content-type "application/json"
      :Authorization (str "Bearer "  (:token (:token @app-state))) }
  })
)


(defn onDropDownChange [id value]
  (swap! app-state assoc-in [:selecteduser] value)

  
  (if (nil? (:trips ((keyword value) @app-state)))
    (getTrips)
  )
)


(defn comp-users
  [user1 user2]
  (if (> (compare (:login user1) (:login user2)) 0) 
      false
      true
  )
)


(defn buildUsersList [data owner]
  (map
    (fn [text]
      (dom/option {:key (:login text) :value (:login text)
                    :onChange #(handle-change % owner)} (:login text))
    )
    (sort (comp comp-users) (:users @app-state )) 
  )
)

(defn setUsersDropDown []
  (jquery
     (fn []
       (-> (jquery "#users" )
         (.selectpicker {})
       )
     )
   )
   (jquery
     (fn []
       (-> (jquery "#users" )
         (.selectpicker "val" (:selecteduser @app-state)
                          )
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

(defn onDidUpdate [data]
    (.log js/console "Update Core happened") 
  (setUsersDropDown)
    ;; (jquery
    ;;   (fn []
    ;;     (-> (jquery "#side-menu")
    ;;       (.metisMenu)
    ;;     )
    ;;   )
    ;; )

)

(defn onMount [data]
  (.log js/console "Mount core happened")
  (setUsersDropDown)
)


(defcomponent users-navigation-view [data owner]
  (did-mount [_]
    (onMount data)
  )
  (did-update [this prev-props prev-state]
    onDidUpdate data
  )
  (render [_]
    (let [style {:style {:margin "10px" :padding-bottom "0px"}}
      stylehome {:style {:margin-top "0px"} }
      ]
      (dom/nav {:className "navbar navbar-default navbar-static-top" :role "navigation"}
        (dom/div {:className "navbar-header"}
          (dom/button {:type "button" :className "navbar-toggle"
            :data-toggle "collapse" :data-target ".navbar-collapse"}
            (dom/span {:className "sr-only"} "Toggle navigation")
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
          )
          (dom/a  (assoc stylehome :className "navbar-brand")
            (dom/span {:id "pageTitle"}  (:current @data))
          )
        )
        (dom/ul {:className "nav navbar-top-links navbar-right"}
          ;;(displayMessagesBlock data)
          ;;(displayUserSettingsBlock data)
        )
        ;;(displaySideBarBlock data)
      )
    )
  )
)
(defn handleChange [e]
  (swap! app-state assoc-in [(keyword (.. e -nativeEvent -target -id))] (.. e -nativeEvent -target -value))
)

(defn handleCheck [e]
  (.stopPropagation e)
  (.stopImmediatePropagation (.. e -nativeEvent) )
  (swap! app-state assoc-in [(keyword (.. e -nativeEvent -target -id))] (.. e -nativeEvent -target -checked))
)

(defn printMonth []
  (.print js/window)
)

(defcomponent trips-navigation-view [data owner]
  (render [_]
    (let [style {:style {:margin "10px" :padding-bottom "0px"}}
      stylehome {:style {:margin-top "10px"} }
      ]
      (dom/nav {:className "navbar navbar-default navbar-fixed-top" :role "navigation"}
        (dom/div {:className "navbar-header"}
          (dom/button {:type "button" :className "navbar-toggle"
            :data-toggle "collapse" :data-target ".navbar-ex1-collapse"}
            (dom/span {:className "sr-only"} "Toggle navigation")
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
          )
          (dom/a  (assoc stylehome :className "navbar-brand")
            (dom/span {:id "pageTitle"} (:current @data))
          )
        )
        (dom/div {:className "collapse navbar-collapse navbar-ex1-collapse" :id "menu"}
          (dom/ul {:className "nav navbar-nav" :style {:padding-top "17px" :visibility (if (= (:current @app-state) "Trips") "visible" "hidden")}}
            (dom/li
              ;; (dom/a (assoc style :href "#/eportal")
              ;;   (dom/span {:className "glyphicon glyphicon-home"})
              ;;     "Trips block"
              ;;   )
              (dom/div {:style {:margin-right "10px" :visibility (if (and (= (:current @app-state) "Trips") (or (= (:role (:user @app-state)) "admin") (= (:role (:user @app-state)) "admin")) ) "visible" "hidden")}}
                (omdom/select #js {:id "users"
                                   :className "selectpicker"
                                   :data-show-subtext "true"
                                   :data-live-search "true"
                                   :onChange #(handle-change % owner)
                                   }                
                  (buildUsersList data owner)
                )
              )
            )
              (dom/li
                (dom/h5 {:style {:margin-left "5px" :margin-right "5px" :height "32px" :margin-top "1px"}} " "
        (dom/input {:id "search" :type "text" :placeholder "Search" :style {:height "32px" :margin-top "1px"} :value  (:search @app-state) :onChange (fn [e] (handleChange e )) })  )
              )

              (dom/li
                (dom/label {:style {:font-weight 100 :margin-top "7px"} }
                  (dom/input {:id "ismonthly" :type "checkbox" :defaultChecked false :onChange (fn [e] (handleCheck e))}) "Select this month"
                )
              )
              (dom/li {:style {:margin-left "5px"}}
                (b/button {:className "btn btn-info"  :onClick (fn [e] (printMonth))  } "Print trips")
              )
          )
         
          (dom/ul {:className "nav navbar-nav navbar-right"}
            (dom/li
              (dom/a (assoc style :href "#/trips")
                 (dom/span {:className "glyphicon glyphicon-cog"})
                 "Trips"
              )
            )         
            (dom/li {:style {:visibility 
                                           (if 
                                             (or (= (:role (:user @app-state)) "admin")
                                                 (= (:role (:user @app-state)) "manager")) "visible" "hidden")}}

              (dom/a (assoc style :href "#/users") 
                (dom/span {:className "glyphicon glyphicon-log-out"})
                "Users"
              )
            )
            (dom/li
              (dom/a (assoc style :href "#/login")
                (dom/i {:className "fa fa-sign-out fa-fw"})
                "Exit"
              )
            )
          )
        )
      )
    )
  )
)

(defmulti website-view
  (
    fn [data _]
      (:view (if (= data nil) @app-state @data ))
      ;;(:view @app-state )
  )
)

(defmethod website-view 0
  [data owner] 
  ;(.log js/console "zero found in view")
  (logout-view data owner)
)

(defmethod website-view 1
  [data owner] 
  ;(.log js/console "One is found in view")
  (trips-navigation-view data owner)
)


(defmethod website-view 2
  [data owner] 
  ;(.log js/console "Two is found in view")
  (users-navigation-view data owner)
)




; (defn root-component [app owner]
;   (reify
;     om/IRender
;     (render [_]
;       (dom/div nil (dom/h1 nil (:text app))))))

; (om/root
;  root-component
;  app-state
;  {:target (js/document.getElementById "app")})



(defn main []
  (-> js/document
      .-location
      (set! "#/"))

  (aset js/window "location" "#/login")
)
