import React, { useState } from 'react'
// import Header from './components/Header'
// import CoreConcept from './components/CoreConcept'
// import { CORE_CONCEPTS, EXAMPLES } from './components/data'
// import TabButton from './components/TabButton'
import FormValuse from './components/FormValuse'
function App() {
  // const [selectedTopic, setSelectedTopic] = useState('Please Click Me')
  return (
    <div>
      <FormValuse />
    </div>
//     <div>
//       <Header/>
//       <main>
//       <section id="core-concepts">
//       <h2>Time to get started</h2>
//       <CoreConcept image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
//      <CoreConcept image={CORE_CONCEPTS[1].image} title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description}/>
//     <CoreConcept image={CORE_CONCEPTS[2].image} title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description}/>
// <CoreConcept image={CORE_CONCEPTS[3].image} title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}/>
//     {/* method 2 */}
//     <CoreConcept {...CORE_CONCEPTS[0]}/>
//     <CoreConcept {...CORE_CONCEPTS[1]} />
//     <CoreConcept {...CORE_CONCEPTS[2]}/>
//     <CoreConcept {...CORE_CONCEPTS[3]}/>
//        </section>

//        <section id="example">
//         <h2>Examples</h2>
//         <menu>
//           <TabButton onSelect={() => handleClick('components') }>Components</TabButton>
//           <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
//           <TabButton onSelect={ () => handleClick('jsx')}>JSX</TabButton>
//           <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          
//         </menu>
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//      <p>{EXAMPLES[selectedTopic].description}</p>
//      <pre>
// <code>{EXAMPLES[selectedTopic].code}</code>
//      </pre>
//       </div>
//        </section>
//       </main>
//     </div>
  )
}

export default App