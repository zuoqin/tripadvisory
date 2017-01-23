(ns tripweb.trips (:use [net.unit8.tower :only [t]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            [tripweb.core :as tripcore]
            [ajax.core :refer [GET POST]]
            [tripweb.settings :as settings]
            [om-bootstrap.button :as b]
  )
  (:import goog.History)
)

(enable-console-print!)

(defonce app-state (atom  {:users [] :trips [] }))



(defn OnGetTrips [response]
   (swap! app-state assoc :trips response  )
   (tripcore/setUsersDropDown)
   (.log js/console (:users @app-state)) 

)


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)




(defn getTrips [] 
  (GET (str settings/apipath "api/trip?login=" (:login (:user @tripcore/app-state)) ) {
    :handler OnGetTrips
    :error-handler error-handler
    :headers {
      :content-type "application/json"
      :Authorization (str "Bearer "  (:token (:token @tripcore/app-state))) }
  })
)


(defcomponent showtrips-view [data owner]
  (render
    [_]
    (dom/div {:className "list-group" :style {:display "block"}}
      (map (fn [item]
        (dom/span
          (dom/a {:className "list-group-item" :href (str  "#/tripdetail/" (nth item 0) ) }
            (dom/h4  #js {:className "list-group-item-heading" :dangerouslySetInnerHTML #js {:__html (nth item 1)}} nil)
            ;(dom/h4 {:className "list-group-item-heading"} (get item "subject"))
            (dom/h6 {:className "paddingleft2"} (nth item 2))
            ;(dom/p  #js {:className "list-group-item-text paddingleft2" :dangerouslySetInnerHTML #js {:__html (get item "body")}} nil)
          ) 
        )
        ) (:trips ((keyword (:selecteduser @tripcore/app-state)) @data) )
      )
    )
  )
)

(defn onMount [data]
  (getTrips)
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
        (dom/div  (assoc styleprimary  :className "panel panel-primary" ;:onClick (fn [e](println e))
        )
          (dom/div
            (b/button {:className "btn btn-primary" :onClick (fn [e] (-> js/document
          .-location
          (set! "#/tripdetail/0")))} "Add New")
          )
          (om/build showtrips-view  data {})
        )
      ) 
    )
  )
)




(sec/defroute messages-page "/trips" []
  (om/root trips-view
           tripcore/app-state
           {:target (. js/document (getElementById "app"))}))


