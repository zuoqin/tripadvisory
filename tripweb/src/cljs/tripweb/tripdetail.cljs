(ns tripweb.tripdetail  (:use [net.unit8.tower :only [t]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [tripweb.core :as tripcore]
            [ajax.core :refer [GET POST PUT DELETE]]
            [clojure.string :as str]
            [om-bootstrap.button :as b]
            [om-bootstrap.panel :as p]
            [cljs.core.async :refer [put! dropping-buffer chan take! <!]]
            [om-bootstrap.input :as i]
            [cljs-time.core :as tm]
            [cljs-time.format :as tf]
            [cljs-time.coerce :as tc]
            [tripweb.settings :as settings]
  )
  (:import goog.History)
)

(def jquery (js* "$"))

(enable-console-print!)

(def custom-formatter (tf/formatter "dd/mm/yyyy"))

(def custom-formatter1 (tf/formatter "MMM dd yyyy hh:mm:ss"))

(def ch (chan (dropping-buffer 2)))
(defonce app-state (atom  {:to #inst "2016-01-26T00:01:00.000-00:00" :from #inst "2016-01-26T00:01:00.000-00:00" :destination "" :comment "" :view 1 :tripid 0 :current "Trip Detail"} ))

(defn OnDeleteTripError [response]
  (let [     
      newdata {:tripid (get response (keyword "tripid") ) }
    ]

  )
  ;; TO-DO: Delete Trip from Core
  ;;(.log js/console (str  (get (first response)  "Title") ))
)


(defn OnDeleteTripSuccess [response]
  (let [
      trips (:trips ( (keyword (:login (:user @tripcore/app-state)) ) @tripcore/app-state  )  )  
      newtrips (remove (fn [trip] (if (= (str (nth trip 0)) (:tripid @app-state) ) true false  )) trips)
      newdata {:tripid (get response (keyword "tripid") ) }
    ]
    ;(swap! tripcore/app-state assoc-in [:token] newdata )
    (swap! tripcore/app-state assoc-in [:users] newtrips)
  )
  ;; TO-DO: Delete Trip from Core
  ;;(.log js/console (str  (get (first response)  "Title") ))
)


(defn deleteTrip [tripid]
  (DELETE (str settings/apipath  "api/trip?id=" tripid) {
    :handler OnDeleteTripSuccess
    :error-handler OnDeleteTripError
    :headers {
      :content-type "application/json" 
      :Authorization (str "Bearer "  (:token (:token @tripcore/app-state)))}
    :format :json})
)

(defn updateTrip []
  (PUT (str settings/apipath  "api/trip") {
    :handler OnDeleteTripSuccess
    :error-handler OnDeleteTripError
    :headers {
      :content-type "application/json" 
      :Authorization (str "Bearer "  (:token (:token @tripcore/app-state)))}
    :format :json
    :params {:to (:to @app-state) :from (:from @app-state) :destination (:destination @app-state) :comment (:comment @app-state) }})
)

(defn createTrip []
  (POST (str settings/apipath  "api/trip") {
    :handler OnDeleteTripSuccess
    :error-handler OnDeleteTripError
    :headers {
      :content-type "application/json" 
      :Authorization (str "Bearer "  (:token (:token @tripcore/app-state)))}
    :format :json
    :params {:to (:to @app-state) :from (:from @app-state) :destination (:destination @app-state) :comment (:comment @app-state) }})
)

(defn setNewTripValue [key val]
  (swap! app-state assoc-in [(keyword key)] val)
)

(defn setdatepicker [field]
  (.log js/console (str "current field: " (:name field)) )
  (jquery
   (fn []
     
     (-> (jquery (str "#" (:name field )) )
       (.datepicker #js{:format "dd/mm/yyyy" })
       (.on "show"
         (fn [e] (
            let [
              dt (js/Date (.. e -date))
              dtstring (if
                (= (count (.. e -dates) ) 0)
                  nil 
                  (tf/parse custom-formatter1 (subs (str (.. e -date)  )  4 24)  )
              )


            ]
                  (
                       setNewTripValue (.. e -target -id) (tc/to-date dtstring) 
                 )
                 ;; (
                 ;;   if (= dtstring nil) "nil"
                 ;;   (
                 ;;     if (not= 
                 ;;                         ;( (keyword (.. e -target -id)) (:leaveapp @app-state)  )  
                 ;;         ( (keyword (.. e -target -id)) @app-state)
                 ;;         (tf/unparse custom-formatter dtstring)

                 ;;         )
                 ;;     (
                 ;;       setNewTripValue (.. e -target -id) (tf/unparse custom-formatter dtstring)
                 ;;     )
                 ;;   )
                 ;; )
           )
         )
       )
     )      
   )
  ) 
)


(defn setdatepickers []
  (let [fields  [{:name "from"} {:name "to"}] ]
    ;(.log js/console (get (nth fields 2 ) "fieldcode"    )   )
    (dorun (map setdatepicker fields   ))
  )
)



(defn setcontrols []
  (setdatepickers)
  (.log js/console "fieldcode"       )
)

(defn initqueue []
  (doseq [n (range 1000)]
    (go ;(while true)
      (take! ch(
        fn [v] (
           ;(setcalculatedfields) 
           setcontrols 
           ;.log js/console "Core.ASYNVC working!!!" 
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


;;(tf/unparse custom-formatter (tc/from-date (nth trip 3)) )

(defn setTrip []
  (let [
        login (:login (:user @tripcore/app-state))
        trip (first (filter (fn [trip] (if (= (:tripid @app-state) (str (nth trip 0))  )  true false)) (:trips ( (keyword login) @tripcore/app-state) )))  ]

       (.log js/console "the trip")
       (.log js/console trip)
       (swap! app-state assoc-in [:id ]  (nth trip 0)) 
       (swap! app-state assoc-in [:from ] (nth trip 3)  ) 
       (swap! app-state assoc-in [:to ]  (nth trip 4)  )  
       (swap! app-state assoc-in [:destination] (nth trip 1) ) 
       (swap! app-state assoc-in [:comment ] (nth trip 2))
    )

)




(defn OnError [response]
  (let [     
      newdata { :error (get (:response response)  "error") }
    ]
     
    
  )
  
  
)


(defn getTripDetail []
  (if
    (and 
      (not= (:tripid @app-state) nil)
      (not= (:tripid @app-state) 0)
    )
    (setTrip)
  
  )
)

(defn handleChange [e]
  (.log js/console e  )  
  (.log js/console "The change ....")
  (swap! app-state assoc-in [(keyword (.. e -nativeEvent -target -id))] (.. e -nativeEvent -target -value))
)


(defn onMount [data]
  (swap! tripcore/app-state assoc-in [:current] "Trip Detail")
  (getTripDetail)
  (setcontrols)
)

(defcomponent tripdetail-page-view [data owner]
  (did-mount [_]
    (onMount data)
  )
  (did-update [this prev-props prev-state]
    (.log js/console "Update happened") 
    (swap! tripcore/app-state assoc-in [:current] "Trip Detail")
    (put! ch 42)
  )
  (render
    [_]
    (let [style {:style {:margin "10px;" :padding-bottom "0px;"}}
      styleprimary {:style {:margin-top "70px"}}
      ]
      (dom/div
        (om/build tripcore/website-view data {})
        (dom/div {:id "message-detail-container"}
          (dom/span
            (dom/div  (assoc styleprimary  :className "panel panel-default"  :id "divMsgInfo")
              (dom/div {:className "panel-heading"}
                (dom/h3 {:className "panel-title"} (:destination @app-state))
                
                (dom/h5 "To: "
                  (dom/input {:id "to" :type "text" :value  (tf/unparse custom-formatter (tc/from-date (:to @app-state)) )})
                )
                (dom/h5 "From: "
                  (dom/input {:id "from" :type "text" :value  (tf/unparse custom-formatter (tc/from-date (:from @app-state)) )})
                )
                (dom/h5 "comment: "  
                  (dom/input {:id "comment" :type "text" :value  (:comment @app-state) :onChange (fn [e] (handleChange e )) })  )
              )
              
            )
          )
        )
        (dom/nav {:className "navbar navbar-default" :role "navigation"}
          (dom/div {:className "navbar-header"}
            (b/button {:className "btn btn-default" :onClick (fn [e] (updateTrip))} "Update")

            (b/button {:className "btn btn-danger" :onClick (fn [e] (deleteTrip (:tripid @app-state)))} "Delete")
          )
        )
      )
    )

  )
)


(sec/defroute tripdetail-page "/tripdetail/:id" {id :id}
  (let [
    tripid id
    ]
    (swap! app-state assoc :tripid tripid ) 

    (om/root tripdetail-page-view
             app-state
             {:target (. js/document (getElementById "app"))})

  )
)
