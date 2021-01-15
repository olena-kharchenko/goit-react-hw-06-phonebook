import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import * as phonebookActions from './redux/phonebook-actions';
import Container from './components/Container';
import Section from './components/Section';
import MyForm from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

function App({ contacts, setContacts }) {
  // const isFirstRender = useRef(true);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

  //     if (parsedContacts) {
  //       setContacts(parsedContacts);
  //     }

  //     isFirstRender.current = false;
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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

export default App;

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   setContacts: parsedContacts =>
//     dispatch(
//       parsedContacts.map(({ name, number }) =>
//         phonebookActions.addContact(name, number),
//       ),
//     ),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
