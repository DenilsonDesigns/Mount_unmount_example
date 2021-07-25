## React Mount/Unmount Example In Hooks API

### With the React Hooks API, using logic to run on the mount or unmount of a component is incredibly easy. However it's amazing how many people who come from the class-based component days don't know how to implement it!

### With the useEffect hook, we easily have access to call logic on the mount/unmount of a component. Look at the below example:

```
  useEffect(() => {
    // Logic to run on mount here:
    console.log("Component Mounted");
    return () => {
    // Inside the return callback, we write our
    // "unmount" logic.
      console.log("Component UnMounted");
    };
    // Passing an empty array as a dependency means
    // the hook will run on mount.
  }, []);
```

### If you run this simple application you can see this in effect. When the app loads, it will mount the "TopComponent" component by default. If you click the "UnMount" button on screen, it will unmount the TopComponent and Mount the "BottomComponent" component, you can see the corresponding log statements when a component is mounted/unmounted:

![Alt text](./mount_example.png?raw=true "Optional Title")

### Good Luck!
