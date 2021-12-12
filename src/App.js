import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

const sectionClass = ['section'];

function App() {
  return (
    <section className={sectionClass}>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts></Contacts>
      </Section>
    </section>
  );
}

export default App;
