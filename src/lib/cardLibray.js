const shortName = (name, len) => {
    return name.length > len ? `${name.slice(0, len)}...` : name
};
  
const formattedDate = (dateString) => {
    const options = { day: 'numeric', month: 'short' };
    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, options);
};

const getDay = (dateString) => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate();
    return day;
};

const getMonth = (dateString) => {
    const dateObject = new Date(dateString);
    const monthName = dateObject.toLocaleDateString('default', { month: 'short' });
    return monthName;
};

const fakeImg = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


export {shortName, formattedDate, getDay, getMonth, fakeImg}