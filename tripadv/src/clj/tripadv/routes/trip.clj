(ns tripadv.routes.trip
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            

            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [tripadv.db.trip :as db]

            [clojure.string :as str]
))

(defn getTrips [token login]
  (let [
    usercode (:iss (-> token str->jwt :claims)  ) 
    result (into [] (db/get-trips login)   )         
    ]
    result
  )
 
)


(defn createTrip [token user destination startdate enddate description]
  (let [
    usercode (:iss (-> token str->jwt :claims)  ) 
    ;;; TO-DO: add check authorization to add 

    res (db/create-trip user destination startdate enddate description)

    result {:res "Success" :id res}
    ]
    
    
    ;; TO-DO Add check successfull
    result
  )
 
)


(defn updateTrip [token id destination startdate enddate description]
  (let [
    usercode (:iss (-> token str->jwt :claims)  ) 
    ;;; TO-DO: add check authorization to add 

    result {:res "Success"}
    ]
    
    (db/update-trip id destination startdate enddate description)
    ;; TO-DO Add check successfull
    result
  )
 
)


(defn deleteTrip [token id]
  (let [
    usercode (:iss (-> token str->jwt :claims)  ) 
    ;;; TO-DO: add check authorization to add 

    result {:res "Success"}
    ]
    
    (db/delete-trip id)
    ;; TO-DO Add check successfull
    result
  )
 
)

