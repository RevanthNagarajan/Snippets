

const preMovie = async () => {

    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
      setTimeout(() => reject('ticket'), 3000);
    });
  
    let ticket;
      try {
        ticket = await person3PromiseToShowTicketWhenWifeArrives;
    } catch(e) {
        ticket = 'sad face';
    }
    
  
    return ticket;
    
};
preMovie().then((t) => console.log(`person4 shows ${t}`));  