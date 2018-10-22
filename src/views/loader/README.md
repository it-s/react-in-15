# /views/loader

######  A simple stub that regulates the loading indicator appearance. No React app should even do without one.

## ./container.jsx

**Stateless Component**

This view wraps our app root and switches the base view between loading, view and error states:

```
...
<div className="loader-container">
  {
	(() => {
	  switch (true) {
		case state === ApplicationState.INIT:
		case state === ApplicationState.LOADING:
		  return <Indicator />;
		case state === ApplicationState.ERROR:
		  return <ErrorView />;
		default:
		  return children;
	  }
	})()
  }
</div>
...
```
## ./error.jsx

**Stateless Component**

Simple view, which shows up when our gallery encounters an error.

## ./indicator.jsx

**Stateless Component**

Simple view, which shows up when our gallery is loading data.

