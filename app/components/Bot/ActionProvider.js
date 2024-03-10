import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    
    const greet = () =>  {
        const greetingMessage = createChatBotMessage("Hi, How can we assist you today? .")
        updateState(greetingMessage)
      }
      const listClubs = () => {
        const clubsMessage = createChatBotMessage("We have the following clubs: Web, Mobile, UI/UX.");
        updateState(clubsMessage);
    };

    const currentEvents = () => {
        const eventsMessage = createChatBotMessage("Currently, we have Hackathon, Tech Talks and Workshops, Project Exhibitions, and more events going on.");
        updateState(eventsMessage);
    };

    const totalClubs = () => {
        const totalClubsMessage = createChatBotMessage("We have 3 clubs in total: Web, Mobile, and UI/UX.");
        updateState(totalClubsMessage);
    };

    

    const ranking = () => {
        const totalClubsMessage = createChatBotMessage("The college is ranked 82nd.");
        updateState(totalClubsMessage);
    };


    
    const contact = () => {
        const totalClubsMessage = createChatBotMessage(" You can contact the college via email at contact@nitsrinagar.ac.in.");
        updateState(totalClubsMessage);
    };

    const phone = () => {
        const totalClubsMessage = createChatBotMessage("You can contact the college via phone at +91 1234567890");
        updateState(totalClubsMessage);
    };

    const alumni = () => {
        const totalClubsMessage = createChatBotMessage("Yes, you can find the college's alumni association at https://example.com/alumni-association.");
        updateState(totalClubsMessage);
    };


    
    const def = () => {
        const totalClubsMessage = createChatBotMessage("Sorry we can't you with that at the moment!");
        updateState(totalClubsMessage);
    };


    
    
    


    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        greet, 
                        greet,
                        listClubs,
                        currentEvents,
                        totalClubs,
                        ranking,
                        contact,
                        phone,
                        alumni,
                        def

                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
