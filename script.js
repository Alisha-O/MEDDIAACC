//Stores the current patient information
let currentPatient=null;

//Stores all medical services added
let services=[]

//Stores total bill amount
let totalBill=0;

//==============REGISTER PATIENT FUNCTION============/
function registerPatient(){
    //Get patient name from input field
    const name=document.getElementById("patientName").value;

    //Get patient age from input field
    const age=document.getElementById("patientAge").value;

    //Check if fields are empty
    if (name==="" || age===""){
        alert("Please enter patient details.");
        return; //Stop function if empty
    }

    //Create patient object
    currentPatient={
        name:name,
        age:age
    };

    //Display registered patient info
    document.getElementById("patientInfo").innerText='Registered Patient: ${name}, Age: ${age}';
}

//===============ADD SERVICE FUNCTION====================
function addService(){

    //Get service name
    const serviceName=document.getElementById("serviceName").value;

    //Convert service cost to a number
    const serviceCost=parseFloat(document.getElementById("serviceCost").value);

    //Validate inputs
    if (!serviceName || isNan(serviceCost)){
        alert("Enter valid service details.");
        return;
    }

    //Add service to services array
    services.push({
        name:serviceName,
        cost:serviceCost
    });

    //Add cost to total bill
    totalBill += serviceCost;

    //Create new list item element
    const li=document.createElement("li");

    //Set list item text
    li.textContent='${serviceName}-$${serviceCost}';

    //Add list item to service list
    document.getElementById("totalBill").innerText=totalBill;

    //Clear input fields after adding
    document.getElementById("serviceName").value="";
    document.getElementById("serviceCost").value="";
}

//===================GENERATE SUMMARY===================
function generateSummary(){

    //Check if patient exists
    if(!currentPatient){
        alert("No patient registered.")
        return;
    }

    //Create summary text
    let summaryText=' Patient: ${currentPatient.name} Total Services: ${services.length} Total Amount: $${totalBill} ';

    //Display summary
    document.getElementById("summary").innerText=summaryText;
}