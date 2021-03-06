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

(def custom-formatter (tf/formatter "dd/MM/yyyy"))

(def custom-formatter1 (tf/formatter "MMM dd yyyy hh:mm:ss"))

(def ch (chan (dropping-buffer 2)))
(defonce app-state (atom  {:to #inst "2014-01-26T00:01:00.000-00:00" :from #inst "2014-01-26T00:01:00.000-00:00" :destination "" :comment "" :view 1 :tripid 0 :current "Trip Detail"} ))

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
      trips (:trips ( (keyword (:selecteduser @tripcore/app-state) ) @tripcore/app-state  )  )  
      newtrips (remove (fn [trip] (if (= (nth trip 0) (:tripid @app-state) ) true false  )) trips)
    ]

    (swap! tripcore/app-state assoc-in [(keyword (:selecteduser @tripcore/app-state) ) :trips] newtrips)
  )
  (-> js/document
      .-location
      (set! "#/trips"))
)

(defn OnUpdateTripError [response]
  (let [     
      newdata {:tripid (get response (keyword "tripid") ) }
    ]

  )
  ;; TO-DO: Delete Trip from Core
  ;;(.log js/console (str  (get (first response)  "Title") ))
)


(defn OnUpdateTripSuccess [response]
  (let [
      trips (:trips ( (keyword (:selecteduser @tripcore/app-state) ) @tripcore/app-state  )  )  
      newtrips (remove (fn [trip] (if (= (nth trip 0) (:tripid @app-state) ) true false  )) trips)
      addtrips (into [] (conj newtrips [(:tripid @app-state) (:destination @app-state) (:comment @app-state) (:from @app-state) (:to @app-state)  ]  )) 
    ]
    (swap! tripcore/app-state assoc-in [(keyword (:selecteduser @tripcore/app-state) ) :trips] addtrips)

    (-> js/document
      .-location
      (set! "#/trips"))

  )
)



(defn OnCreateTripError [response]
  (let [     
      newdata {:tripid (get response (keyword "tripid") ) }
    ]

  )
  ;; TO-DO: Delete Trip from Core
  ;;(.log js/console (str  (get (first response)  "Title") ))
)


(defn OnCreateTripSuccess [response]
  (let [
      trips (:trips ( (keyword (:selecteduser @tripcore/app-state) ) @tripcore/app-state  )  )  
      addtrips (into [] (conj trips [(get response (keyword "id")) (:destination @app-state) (:comment @app-state) (:from @app-state) (:to @app-state)  ]  )) 
    ]
    (swap! tripcore/app-state assoc-in [(keyword (:selecteduser @tripcore/app-state) ) :trips] addtrips)

    (-> js/document
      .-location
      (set! "#/trips"))

  )
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
    :handler OnUpdateTripSuccess
    :error-handler OnUpdateTripError
    :headers {
      :content-type "application/json" 
      :Authorization (str "Bearer "  (:token (:token @tripcore/app-state)))}
    :format :json
    :params {:id (:tripid @app-state) :login (:selecteduser @tripcore/app-state)  :enddate (tf/unparse custom-formatter (tc/from-date (:to @app-state))  )  :startdate (tf/unparse custom-formatter (tc/from-date (:from @app-state))  )  :destination (:destination @app-state) :description (:comment @app-state) }})
)

(defn createTrip []
  (POST (str settings/apipath  "api/trip") {
    :handler OnCreateTripSuccess
    :error-handler OnCreateTripError
    :headers {
      :content-type "application/json" 
      :Authorization (str "Bearer "  (:token (:token @tripcore/app-state)))}
    :format :json
    :params { :login (:selecteduser @tripcore/app-state)  :enddate (tf/unparse custom-formatter (tc/from-date (:to @app-state))  )  :startdate (tf/unparse custom-formatter (tc/from-date (:from @app-state))  )  :destination (:destination @app-state) :description (:comment @app-state) }})
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
                  (tf/parse custom-formatter1 (str (subs (str (.. e -date)  )  4 16)  "00:01:00")   )
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
  ;;(.log js/console "fieldcode"       )
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

(defn setTripValues [trip]
  ;(swap! app-state assoc-in [:id ]  (nth trip 0)) 
  (swap! app-state assoc-in [:from] (nth trip 3)  ) 
  (swap! app-state assoc-in [:to]  (nth trip 4)  )
  (swap! app-state assoc-in [:destination] (nth trip 1) )
  (swap! app-state assoc-in [:comment ] (nth trip 2))
)

(defn setTripNullValues []
  ;;(swap! app-state assoc-in [:id ]  0) 
  (swap! app-state assoc-in [:from] (tc/to-date (tf/parse custom-formatter1 (str (subs (js/Date)  4 16)  "00:01:00")   ))  )
  (swap! app-state assoc-in [:to]   (tc/to-date (tf/parse custom-formatter1 (str (subs (js/Date)  4 16)  "00:01:00")   ))  )
  (swap! app-state assoc-in [:destination] "" )
  (swap! app-state assoc-in [:comment ] "")
)

(defn setTrip []
  (let [
        login (:selecteduser @tripcore/app-state)
        trip (first (filter (fn [trip] (if (= (:tripid @app-state) (nth trip 0)  )  true false)) (:trips ( (keyword login) @tripcore/app-state) )))  ]

       (.log js/console "the trip")
       (.log js/console trip)

       (if (= trip nil)
         (setTripNullValues)
         (setTripValues trip)
       )
    )

)




(defn OnError [response]
  (let [     
      newdata { :error (get (:response response)  "error") }
    ]
     
    
  )
  
  
)


(defn getTripDetail []

  (setTrip)
  ;; (if
  ;;   (and 
  ;;     (not= (:tripid @app-state) nil)
  ;;     (not= (:tripid @app-state) 0)
  ;;   )
    
  
  ;; )
)

(defn handleChange [e]
  (.log js/console e  )  
  (.log js/console "The change ....")
  (swap! app-state assoc-in [(keyword (.. e -nativeEvent -target -id))] (.. e -nativeEvent -target -value))
)


(defn onMount [data]
  ;(setTripNullValues)
  (swap! tripcore/app-state assoc-in [:current] "Trip Detail")
  (getTripDetail)
  (put! ch 42)
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
                (dom/h3 {:className "panel-title"} 
                  (dom/input {:id "destination" :type "text" :value  (:destination @app-state) :onChange (fn [e] (handleChange e )) }))
                
                (dom/h5 "To: "
                  (dom/input {:id "to" :type "text" data-date-format="DD/MM/YYYY" :value  (tf/unparse custom-formatter (tc/from-date (:to @app-state)) )})
                )
                (dom/h5 "From: "
                  (dom/input {:id "from" :type "text" data-date-format="DD/MM/YYYY" :value  (tf/unparse custom-formatter (tc/from-date (:from @app-state)) )})
                )
                (dom/h5 "comment: "  
                  (dom/input {:id "comment" :type "text" :value  (:comment @app-state) :onChange (fn [e] (handleChange e )) })  )
              )
              
            )
          )
        )
        (dom/nav {:className "navbar navbar-default" :role "navigation"}
          (dom/div {:className "navbar-header"}
            (b/button {:className "btn btn-default" :onClick (fn [e] (if (= (:tripid @app-state) 0) (createTrip) (updateTrip)) )} (if (= (:tripid @app-state) 0) "Insert" "Update") )

            (b/button {:className "btn btn-danger" :style {:visibility (if (= (:tripid @app-state) 0) "hidden" "visible")} :onClick (fn [e] (deleteTrip (:tripid @app-state)))} "Delete")

            (b/button {:className "btn btn-info"  :onClick (fn [e] (-> js/document
      .-location
      (set! "#/trips")))  } "Cancel")
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
    (swap! app-state assoc :tripid (js/parseInt id) ) 
    (om/root tripdetail-page-view
             app-state
             {:target (. js/document (getElementById "app"))})

  )
)
