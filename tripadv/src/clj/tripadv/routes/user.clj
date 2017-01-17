(ns tripadv.routes.user
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            

            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [tripadv.db.user :as db]

            [clojure.string :as str]
))

(defn getUsers [token]
  (let [
    usercode (:iss (-> token str->jwt :claims)  ) 
    result (into [] (db/get-users usercode)   )         
    ]
    ;(println result)
    result
  )
 
)


(defn createUser [token login password role]
  (let [
    usercode (:iss (-> token str->jwt :claims)  ) 
    ;;; TO-DO: add check authorization to add 

    result {:res "Success"}
    ]
    
    (db/create-user login password role)
    ;; TO-DO Add check successfull
    result
  )
 
)


(defn updateUser [token login password role]
  (let [
    usercode (:iss (-> token str->jwt :claims)  ) 
    ;;; TO-DO: add check authorization to add 

    result {:res "Success"}
    ]
    
    (db/update-user login password role)
    ;; TO-DO Add check successfull
    result
  )
 
)


(defn deleteUser [token login]
  (let [
    usercode (:iss (-> token str->jwt :claims)  ) 
    ;;; TO-DO: add check authorization to add 

    result {:res "Success"}
    ]
    
    (db/delete-user login)
    ;; TO-DO Add check successfull
    result
  )
 
)

