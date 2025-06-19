//IndexSignature is ts as a topic
// there are used in the case you are creating and you don't
//  know actually the number of   keys or properties a user will input
//when creating object but you don't know exactly names of keys
//in short you don't know the shape of an object

//typescript asks for index  signature when you try to access the property of
// object when trying to access the values of object

interface obj {
  pizza: number;
  book: number;
  job: number;
}

const transaction: obj = {
  pizza: 80,
  book: 50,
  job: 60,
};
