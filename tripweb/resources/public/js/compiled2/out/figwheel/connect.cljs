(ns figwheel.connect (:require [figwheel.client] [tripweb.login] [figwheel.client.utils]))
(figwheel.client/start {:build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

