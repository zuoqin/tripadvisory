(ns tripweb.core
  (:require [om.core :as om :include-macros true]
            ;;[om.dom :as dom :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            ;;[goog.events :as events]
            ;;[goog.history.EventType :as EventType]
            [ajax.core :refer [GET POST]]

  )

)

(enable-console-print!)

;;(defonce app-state (atom {:text "Hello Chestnut!"}))

(defonce app-state (atom {:view 1 :current "Home"}))


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
            (dom/span {:id "pageTitle"}  "The title")
          )
        )
        (dom/div {:className "collapse navbar-collapse navbar-ex1-collapse" :id "menu"}
          (dom/ul {:className "nav navbar-nav"}
            (dom/li
              (dom/a (assoc style :href "#/eportal")
                (dom/span {:className "glyphicon glyphicon-home"})
                  "Trips block"
                )
            )
          )
         
          (dom/ul {:className "nav navbar-nav navbar-right"}
            (dom/li
              (dom/a (assoc style :href "#/trips")
                 (dom/span {:className "glyphicon glyphicon-cog"})
                 "Trips"
              )
            )         
            (dom/li
              (dom/a (assoc style :href "#/users") 
                (dom/span {:className "glyphicon glyphicon-log-out"})
                "Users"
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