import React, {useEffect, useRef, useState} from "react";
import Layout from "../components/Layout";

function useEventListener(eventName, listener) {
  const ref = useRef(listener)
  useEffect(() => {
    ref.current = listener
  }, [listener])
  useEffect(() => {
    function receiveEvent(event) {
      ref.current(event)
    }

    document.addEventListener(eventName, receiveEvent)
    return () => {
      console.log('cleanup!')
      document.removeEventListener(eventName, receiveEvent)
    }
  }, [eventName])
}

const EventListener = () => {
  const [y, setY] = useState(0)
  useEventListener('scroll', () => {
    setY(window.scrollY)
  })
  return (
    <Layout>
      <h1>EventListener</h1>
      <div className="bg-light" style={{ height: 2000 }} />
      <h2 className="position-fixed" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        y: {y}
      </h2>
    </Layout>
  );
};

export default EventListener
