import { createContext, useState } from "react";
import { v4 as uuidv4} from 'uuid';


const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {
    const [ feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is feedback 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'This item is feedback 2',
            rating: 7,
        },
        {
            id: 3,
            text: 'This item is feedback 3',
            rating: 6,
        },

    ]);
    const [ feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


    const addFeedBack = (newFeedBack) => {
        newFeedBack.id = uuidv4();
        setFeedback([newFeedBack, ...feedback]);

    };

    const updateFeedbackItem = (id, updItem) => {

        setFeedback(feedback.map(item => {
            if (id === item.id) {
                return {
                    id,
                    ...updItem
                };


            }
            return item;
        }));

    };


    const deleteItem = (id) => {
        if (window.confirm('Are you sure you want delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
       
    };

    const editItem = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        });

    }
    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteItem,
            addFeedBack,
            editItem,
            feedbackEdit,
            updateFeedbackItem
        }}>
            {children}
        </FeedbackContext.Provider>
    )
};

export default FeedbackContext;