(ns tripweb.trips (:use [net.unit8.tower :only [t]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            [tripweb.core :as tripcore]
            [ajax.core :refer [GET POST]]
            [tripweb.settings :as settings]
  )
  (:import goog.History)
)

(enable-console-print!)

(defonce app-state (atom  {:users [] :trips [] }))


(defn OnGetUsers [response]
   (swap! app-state assoc :users  (get response "Users")  )
   (.log js/console (:users @app-state)) 

)

(defn OnGetTrips [response]
   (swap! app-state assoc :trips  (get response "Trips")  )
   (.log js/console (:users @app-state)) 

)


(defn OnGetMessagesPage [response]
  (let [
    messages (:messages @app-state)
    ]
    (swap! app-state assoc :messages 
           (into [] (concat messages (get response "Messages")))
           ) 

  )
)

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)




(defn getUsers [data] 
  (GET (str settings/apipath "api/user") {
    :handler OnGetUsers
    :error-handler error-handler
    :headers {
      :content-type "application/json"
      :Authorization (str "Bearer "  (:token  (first (:token @tripcore/app-state)))) }
  })
)

(defn getTrips [data] 
  (GET (str settings/apipath "api/trip?login=" (:user @tripcore/app-state)) {
    :handler OnGetTrips
    :error-handler error-handler
    :headers {
      :content-type "application/json"
      :Authorization (str "Bearer "  (:token  (first (:token @tripcore/app-state)))) }
  })
)


(defcomponent showtrips-view [data owner]
  (render
    [_]
    (dom/div {:className "list-group" :style {:display "block"}}
      (map (fn [item]
        (dom/span
          (dom/a {:className "list-group-item" :href (str  "#/tripdetail/" (get item "tripid") ) }
            (dom/h4  #js {:className "list-group-item-heading" :dangerouslySetInnerHTML #js {:__html (setItemSubject item)}} nil)
            ;(dom/h4 {:className "list-group-item-heading"} (get item "subject"))
            (dom/h6 {:className "paddingleft2"} (get item "senddate"))
            ;(dom/p  #js {:className "list-group-item-text paddingleft2" :dangerouslySetInnerHTML #js {:__html (get item "body")}} nil)
          ) 
        )                  
        )(:trips data)
      )
    )
  )
)

(defn onMount [data]
  (getTrips data)
  (swap! tripcore/app-state assoc-in [:current] 
    "Trips"
  )
)



(defcomponent trips-view [data owner]
  (will-mount [_]
    (onMount data)
  )
  (render [_]
    (let [style {:style {:margin "10px" :padding-bottom "0px"}}
      styleprimary {:style {:margin-top "70px"}}
      ]
      (dom/div
        (om/build tripcore/website-view tripcore/app-state {})
        (dom/div  (assoc styleprimary  :className "panel panel-primary" :onClick (fn [e](displaymessages e)))
          (dom/div {:className "panel-heading"}
            (dom/div {:className "row"}
              (dom/div {:className "col-md-10"}
                (dom/span {:style {:float "left"} :className "glyphicon glyphicon-chevron-down"})
                (dom/span {:style {:padding-left "5px"}} "我的消息")
              )
              (dom/div {:className "col-md-2"}
                (dom/span {:className "badge" :style {:float "right" }} (str (:msgcount data))  )
              )
            )
          )
          (om/build showtrips-view  data {})
        )
      ) 


    )
  )
)




(sec/defroute messages-page "/messages" []
  (om/root trips-view
           app-state
           {:target (. js/document (getElementById "app"))}))


