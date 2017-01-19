(ns tripweb.tripdetail  (:use [net.unit8.tower :only [t]])
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
(defonce app-state (atom  {:to "2000-01-01" :from "2000-01-01" :destination "" :comment "" :view 1 :tripid 0 :current "Trip Detail"} ))





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
                  "2014-01-12"
              )


            ]
             ;; (
             ;;   if (= dtstring nil) "nil"
             ;;   (
             ;;     if (not= 
             ;;                         ;( (keyword (.. e -target -id)) (:leaveapp @app-state)  )  
             ;;         ( (keyword (.. e -target -id)) (:leaveapp @app-state))
             ;;         "2014-01-12"

             ;;         )
             ;;     (
             ;;       setNewTripValue (.. e -target -id) "2014-01-12"
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

(defn setTrip []
    (swap! app-state assoc-in [:id ] 1 ) 
    (swap! app-state assoc-in [:from ]  "05/12/2015" ) 
    (swap! app-state assoc-in [:to ]  "25/12/2016" ) 
    (swap! app-state assoc-in [:destination] "Moscow" ) 
    (swap! app-state assoc-in [:comment ] "Nice trip" )
)




(defn OnError [response]
  (let [     
      newdata { :error (get (:response response)  "error") }
    ]
    (.log js/console (str  response )) 
    
  )
  
  
)


(defn getTripDetail []
  ;(.log js/console (str "token: " " " (:token  (first (:token @t5pcore/app-state)))       ))
  (if
    (and 
      (not= (:tripid @app-state) nil)
      (not= (:tripid @app-state) 0)
    )
    (setTrip)
  
  )
)

(defn handleFromChange [e]
  ;;(.log js/console e  )  
  (.log js/console "The change ....")

)


(defn onMount [data]
  (swap! app-state assoc-in [:current] 
    "Trip Detail"
  )
  (getTripDetail)
  (setcontrols)
)

(defcomponent tripdetail-page-view [data owner]
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
        (dom/div {:id "message-detail-container"}
          (dom/span
            (dom/div  (assoc styleprimary  :className "panel panel-default"  :id "divMsgInfo")
              (dom/div {:className "panel-heading"}
                (dom/h3 {:className "panel-title"} (:destination @app-state))
                
                (dom/h5 "To: "
                  (dom/input {:id "to" :type "text" :value (:to @app-state)})
                )
                (dom/h5 "From: "
                  (dom/input {:id "from" :type "text" :value (:from @app-state)})
                )
                (dom/h5 "comment: "  
                  (dom/input {:id "comment" :type "text" :value (:comment @app-state)})  )
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







