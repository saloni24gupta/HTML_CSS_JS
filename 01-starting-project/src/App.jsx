import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./components/data";
import { EXAMPLES } from "./components/data";
function App() {
  const [selectedTopic, setSelectedTopic] = useState('components')
let tabContent = 'Please Click a button'

  function handleClick(selectedButton) {
    // console.log(selectedButton)
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
}
console.log('APP COMPONENT EXECUTING ')
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        {/* <CoreConcept image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
        <CoreConcept image={CORE_CONCEPTS[1].image} title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description}/>
        <CoreConcept image={CORE_CONCEPTS[2].image} title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description}/>
        <CoreConcept image={CORE_CONCEPTS[3].image} title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}/>*/}
      
      <CoreConcept {...CORE_CONCEPTS[0]}/>
      <CoreConcept {...CORE_CONCEPTS[1]}/>
     <CoreConcept {...CORE_CONCEPTS[2]}/>
      <CoreConcept {...CORE_CONCEPTS[3]}/>
        </section> 

        <section id="examples">
          <h2>Examples</h2>
          <menu>
          {/* <TabButton onSelect={function() { handleClick('Components')}}>components</TabButton>  using function*/}
            <TabButton onSelect={() => handleClick('components')}>components</TabButton>
            <TabButton onSelect={() => handleClick('props')}>props</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={ () => handleClick('state')}>state</TabButton>
          </menu>
<div id='tab-content'>
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>{EXAMPLES[selectedTopic].code}</code>
  </pre>
</div>
        </section>
  </main>
    </div>
  );
}

export default App;