import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import UserCard from './UserCard.jsx';

export default function Users() {
  /**
   * https://reactrouter.com/en/main/hooks/use-navigation
   *
   * This hook(aka function) tells you everything you need to know about a page navigation
   * to build pending navigation indicators and optimistic UI on data mutations.
   * Things like:
   *
   *   Global loading indicators
   *   Disabling forms while a mutation is happening
   *   Adding busy indicators to submit buttons
   *   Optimistically showing a new record while it's being created on the server
   *   Optimistically showing the new state of a record while it's being updated
   *
   *
   * Ποιο απλα η useNavigation() χρησιμοποιηται οταν κατα την φορτωση της σελιδας
   * θελουμε να προσθεσουμε καποιες λειτουργιες όπως:
   *
   * -- να δειχνει "φωρτωνει..." οσο περιμένουμε να φωρτωσει η σελιδα που μολις μεταφερθηκαμε
   *    (πχ μετα απο αιτημa fetch)
   * -- Να απενεργοποιησουμε στοιχεια φορμας οσο διαρκει η αποστολη των στοιχειων της φορμας ή ο ενεγχος
   * -- Να αλλαξουμε το κουμπι submit  με καποιο δεικτη απασχόλησης 🔄 οσο γινεται υποβολη της φορμας
   * -- και άλλα
   */
  let pageState = useNavigation().state; //return idle | submitting | loading as value
  console.log(pageState);

  const users = useLoaderData();

  return (
    // here loading last few miliseconds but you can see it..
    // if you change the body of if..then with if..else you will see that works
    // dispays Loading....
    pageState === 'loading' ? (
      <>
        <p>Products page</p>
        <p>Loading....</p>
      </>
    ) : (
      <>
        <p>This is Users page</p>
        {users.map((user) => (
          <Link to={'/user/' + user.id} key={user.id}>
            <UserCard name={user.name} userData={user} />
          </Link>
        ))}
      </>
    )
  );
}
