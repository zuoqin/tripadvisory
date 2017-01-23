(ns tripadv.routes.dbservices
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            
            [clojure.string :as str]
            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [tripadv.db.core :as db]
))


(defn claim [user] 
  {:iss user
   :exp (plus (now) (days 1))
   :iat (now)
  }
)


(defn checkUser [user password]
  (if (> (count (db/find-user  user password)) 0)
    true
    false
  )
)

(defn get-usercode-by-token [token]
  (let [
    usercode (:iss (-> token str->jwt :claims)  ) 
    result (first (into [] (db/find-user usercode)   )) 
    ]
    (nth result 0)
  ) 
)


(defn verifyToken [token]
  (try
     (-> token str->jwt :claims)
     (catch Exception e {}))


)

(defn checkToken [token]
  (let [key (nth (str/split token #" ") 1)]

    (if (= (:iss 
      (verifyToken key) ) nil)
      false
      true
    )

  )
)
