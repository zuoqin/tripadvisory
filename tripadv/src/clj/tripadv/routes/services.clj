(ns tripadv.routes.services
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]


            [clojure.string :as str]
            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [tripadv.routes.dbservices :as dbservices]
            [tripadv.routes.user :as userapi]
            [tripadv.routes.trip :as tripapi]
            ))

(defapi service-routes
  {:swagger {:ui "/swagger-ui"
             :spec "/swagger.json"
             :data {:info {:version "1.0.0"
                           :title "Trip Advisor API"
                           :description "Core Services"}}}}
  

  (context "/" []
    :tags ["authorization"]
    (POST "/token" []
      ;:return String
      :form-params [grant_type :- String, username :- String, password :- String]
      :summary     "login/password with form-parameters"
      (ok (if (dbservices/checkUser username)
            {:access_token (-> (dbservices/claim username) jwt to-str) :expires_in 99999 :token_type "bearer"}
            ""
         )
      )
    )

  )

  (context "/api" []
    :tags ["user"]

    (GET "/user" []
      :header-params [authorization :- String]
      ;;:query-params [{messageid :- Long -1} ]
      :summary      "retrieve all users for current login"

      (ok  (userapi/getUsers (nth (str/split authorization #" ") 1))) 
    )

    (POST "/user" []
      ;;:return      Long
      :header-params [authorization :- String]
      :body-params [login :- String, password :- String, role :- String]
      :summary     "Create new user"
      (ok (userapi/createUser (nth (str/split authorization #" ") 1) login password role )))

    (DELETE "/user" []
      ;;:return      Long
      :header-params [authorization :- String]
      :query-params [login :- String]
      :summary     "Delete user"
      (ok (userapi/deleteUser (nth (str/split authorization #" ") 1) login )))

    (PUT "/user" []
      ;;:return      Long
      :header-params [authorization :- String]
      :body-params [login :- String, password :- String, role :- String]
      :summary     "Delete user"
      (ok (userapi/updateUser (nth (str/split authorization #" ") 1) login password role)))
  )


  (context "/api" []
    :tags ["trip"]

    (GET "/trip" []
      :header-params [authorization :- String]
      :query-params [login :- String ]
      :summary      "retrieve all trips for given user"

      (ok  (tripapi/getTrips (nth (str/split authorization #" ") 1) login)))

    (POST "/trip" []
      ;;:return      Long
      :header-params [authorization :- String]
      :body-params [login :- String, destination :- String, startdate :- String, enddate :- String, description :- String]
      :summary     "Create new trip"
      (ok (tripapi/createTrip (nth (str/split authorization #" ") 1) login destination startdate enddate description )))

    (DELETE "/trip" []
      ;;:return      Long
      :header-params [authorization :- String]
      :query-params [id :- Long]
      :summary     "Delete trip"
      (ok (tripapi/deleteTrip (nth (str/split authorization #" ") 1) id )))

    (PUT "/trip" []
      ;;:return      Long
      :header-params [authorization :- String]
      :body-params [id :- Long, login :- String, destination :- String, startdate :- String, enddate :- String, description :- String]
      :summary     "Delete user"
      (ok (tripapi/updateTrip (nth (str/split authorization #" ") 1) id destination startdate enddate description )))
  )
)



    ;; (GET "/plus" []
    ;;   :return       Long
    ;;   :query-params [x :- Long, {y :- Long 1}]
    ;;   :summary      "x+y with query-parameters. y defaults to 1."
    ;;   (ok (+ x y)))

    ;; (POST "/minus" []
    ;;   :return      Long
    ;;   :body-params [x :- Long, y :- Long]
    ;;   :summary     "x-y with body-parameters."
    ;;   (ok (- x y)))

    ;; (GET "/times/:x/:y" []
    ;;   :return      Long
    ;;   :path-params [x :- Long, y :- Long]
    ;;   :summary     "x*y with path-parameters"
    ;;   (ok (* x y)))

    ;; (POST "/divide" []
    ;;   :return      Double
    ;;   :form-params [x :- Long, y :- Long]
    ;;   :summary     "x/y with form-parameters"
    ;;   (ok (/ x y)))

    ;; (GET "/power" []
    ;;   :return      Long
    ;;   :header-params [x :- Long, y :- Long]
    ;;   :summary     "x^y with header-parameters"
    ;;   (ok (long (Math/pow x y))))
