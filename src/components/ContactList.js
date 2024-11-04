import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [viewedContacts, setViewedContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const contactsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContacts(contactsArray);
    };

    fetchContacts();
  }, []);

  const handleViewContact = async (id) => {
    const contactRef = doc(db, 'contacts', id);
    await updateDoc(contactRef, { viewedByUser: true });
    setViewedContacts([...viewedContacts, id]);
  };

  const viewed = contacts.filter(contact => contact.viewedByUser);
  const notViewed = contacts.filter(contact => !contact.viewedByUser);

  return (
    <Container>
      <h2>Contacts Non Vus</h2>
      <Row>
        {notViewed.map(contact => (
          <Col key={contact.id} md={4} className="mb-4">
            <Card 
              onClick={() => handleViewContact(contact.id)} 
              className={viewedContacts.includes(contact.id) ? 'bg-light' : ''}
            >
              <Card.Body>
                <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
                <Card.Text>
                  <p>Email: {contact.email}</p>
                  <p>Phone: {contact.phone}</p>
                  <p>Message: {contact.message}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <h2>Contacts Vus</h2>
      <Row>
        {viewed.map(contact => (
          <Col key={contact.id} md={4} className="mb-4">
            <Card className="bg-light">
              <Card.Body>
                <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
                <Card.Text>
                  <p>Email: {contact.email}</p>
                  <p>Phone: {contact.phone}</p>
                  <p>Message: {contact.message}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

 
