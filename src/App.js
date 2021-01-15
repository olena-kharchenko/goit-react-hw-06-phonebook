import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import * as phonebookActions from './redux/phonebook-actions';
import Container from './components/Container';
import Section from './components/Section';
import MyForm from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

function App({ contacts, onFirstRender }) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

      if (parsedContacts) {
        onFirstRender(parsedContacts);
      }

      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Section title="Phonebook">
        <MyForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onFirstRender: parsedContacts =>
    dispatch(phonebookActions.overwriteContacts(parsedContacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
