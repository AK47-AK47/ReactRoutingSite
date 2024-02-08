import { submitNewUser } from '../loaders/loaders.jsx';
import { redirect } from 'react-router';

//as an action function (of Route /new-user) should return null or something
//every action function should return null or something;
export async function validateAndSubmitNewUser({ params, request }) {
    
    let formUserData = await request.formData();
    const user = {
        name,
        username,
        email,
        street,
        streetNumber:null,
        city,
        zipcode,
        phone,
        website,
    };
    
    user.name = formUserData.get('name');
    user.username = formUserData.get('username');
    user.email = formUserData.get('email');
    user.street = formUserData.get('street');
    user.streetNumber = formUserData.get('street-number');
    user.city = formUserData.get('city');
    user.zipcode = formUserData.get('zipcode');
    user.phone = formUserData.get('phone');
    user.website = formUserData.get('website');

    //variable validate will be the errors obj or null: that is what validateNewUser(user) returns
    let validate = validateNewUser(user);

    if (validate === null) {
        let data = await submitNewUser(user);
        //after submition redirect to users page
        return redirect("/users");
    }
    
    return validate;// returns errors object
    
}


function validateNewUser(user) {
    const errors = {};

    const RegExName = /\w/;
    if (!RegExName.test(user.name)) {
        errors.name = "Please enter a correct name. It's required";
    }
    if (user.username === '') {
        errors.username = "Please enter a username. It's required";
    }
    const RegExEmail =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
    if (!RegExEmail.test(user.email)) {
        errors.email =
        "That doesn't look like an email address. Please enter a correct one";
    }
    if (!RegExName.test(user.street)) {
        errors.street = "Please enter a correct street name. It's required";
    }
    const RegExStreetNumber = /^(([a-zA-Z]*\d+)|(\d+[a-zA-Z]*))$/g;
    if (!RegExStreetNumber.test(user.streetNumber)) {
        errors.streetNumber = "Please enter a correct street number. It's required";
    }
    const RegExCity = /^[a-zA-Z]+[^0-9]+[a-zA-Z]+$/g;
    if (!RegExCity.test(user.city)) {
        errors.city = "Please enter a correct city name. It's required";
    }
    const RegEXzipcode = /^\d+[-]?\d+$/;
    if (!RegEXzipcode.test(user.zipcode)) {
        errors.zipcode = "Please enter a correct zipcode. It's required";
    }
    const RegExPhone = /^\d+$/g;
    if (!RegExPhone.test(user.phone)) {
        errors.phone =
        "Please enter a correct phone number. Only numbers allowed. It's required";
    }
    const RegExWebsite =
        /(https:\/\/)?(www)?[-a-zA-Z0-9@%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (!RegExWebsite.test(user.website)) {
        errors.website = "Please enter a correct website. It's required";
    }

    //Object.keys(errors).length -> returns the length(number of) keys of the errors Object.
    //if there is no errors returns 0 (aka false),
    //if there is errors returns 1 or more(aka true)
    //so.. if there is errors return that errors
    if (Object.keys(errors).length) {
        return errors;
    }
    //else null 
    return null;
}