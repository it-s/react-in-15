# /views/gallery

######  Set of views our APP is using. This is pure React at it's best, so pay attention.



## ./filters.jsx

**Stateless Component**

This component houses a set of helpful controls available on the top of our app:

![](https://cdn.docsie.io/boo_PLOEqJGo4IxDnEXnf/d739c442-86d3-9b09-fff4-f9bd109fa9172018_07_10_18_09_24.jpg)

It's a good example of two way communication done in React. We do this by passing a bound callback function `onChange()` to the child component from the parent, and then calling it from the child with parameters:

```
/* index.jsx */
<Filters ... onChange={state => this.setState(state)} />

/* filter.jsx */
export const Filters = ({
  ...
  onChange
}) => {
  ...
  return (<header className="filter-row pure-g pure-form">
  ...
	<select defaultValue={numberOfImagesToDisplay} onChange={(e) => onChange({ numberOfImagesToDisplay: e.currentTarget.value * 1 })}>
        ...
      </select>
      &nbsp;&nbsp;
  <button ... onClick={() => onChange({ displayImagesFromIndex: Math.max(0, displayImagesFromIndex - numberOfImagesToDisplay) })}>&lt;</button>
      &nbsp;
  <button ... onClick={() => onChange({ displayImagesFromIndex: Math.min(1024, displayImagesFromIndex + numberOfImagesToDisplay) })}>&gt;</button>
```
## ./footer.jsx

(Stateless Component) This is the footer of our app. It's very simple, with only one button:

![](https://cdn.docsie.io/boo_PLOEqJGo4IxDnEXnf/37ef8b9c-e365-163d-5e8f-b9e063e75e3b2018_07_10_18_09_24.jpg)

Once again, same structure as for filters.jsx: parent-to-child callback is passed, and then called with params.

## ./image.jsx

(Stateless Component) Image component does image display, the name of the author, and provides links to the original picture page on Unsplash, and original author page:

![](https://cdn.docsie.io/boo_PLOEqJGo4IxDnEXnf/e1d2815c-bfd3-0197-2e87-30e67f6f39fc2018_07_10_18_09_24.jpg)

This is a very simple component, with no special cases to discuss. just take a look at how it works in the code.

## ./index.jsx

**(Statefull component)** The main body of our component. This is where most of the magic happens:

![](https://cdn.docsie.io/boo_PLOEqJGo4IxDnEXnf/bae70ac5-c98a-c4f5-7888-fbb22b06d4072018_07_10_18_09_24.jpg)

Lets start from the beginning. Gallery component is a full fledged React component that implements some of the React Component lifecycle elements.

To accomplish that we firstly need to extend Component class from React:

```
class Gallery extends React.Component {
```
```
  constructor(props) {
    super(props);
    this.state = {
      displayImagesFromIndex: 0,
      numberOfImagesToDisplay: 12,
    };
  }
```
Next happens render() (not necessarily in this sequence in the source actually, but this is the logical sequence React implements for it's components). This is how our component's  view gets generated.

```
    render() {
    const { images } = this;
    return (<div className="image-grid-container">
      <Filters {...this.state} titalNumberOfImages={this.props.images.length} onChange={state => this.setState(state)} />
      <main className="image-grid pure-g">
        {
          images.map(image => <Image key={image.id} {...image} />)
        }
      </main>
      <Footer {...this.state} onClick={state => this.setState(state)} />
    </div>);
  }
```
