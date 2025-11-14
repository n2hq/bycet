// app/hooks/useNProgress.ts
import { useNavigation, useFetchers } from "react-router";
import { useEffect, useRef } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export function useNProgress(delay: number = 300) {
  const navigation = useNavigation();
  const fetchers = useFetchers();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startedRef = useRef(false);

  // Configure NProgress once
  useEffect(() => {
    NProgress.configure({
      showSpinner: false, // You can customize other options here
    });
  }, []);

  useEffect(() => {
    // Check if all navigations and fetcher submissions are idle
    const fetchersIdle = fetchers.every((f) => f.state === "idle");

    // When a navigation or fetch starts
    if (navigation.state !== "idle" || !fetchersIdle) {
      // Set a timer to show the progress bar after a delay
      if (!timerRef.current) {
        timerRef.current = setTimeout(() => {
          NProgress.start();
          startedRef.current = true;
        }, delay);
      }
    } else { // When everything is finished
      // Clear the timer and hide the progress bar
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (startedRef.current) {
        NProgress.done();
        startedRef.current = false;
      }
    }

    // Cleanup the timer if the component unmounts
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [navigation.state, fetchers, delay]);

  // Ensure NProgress is stopped on unmount
  useEffect(() => {
    return () => {
      NProgress.done();
    };
  }, []);
}