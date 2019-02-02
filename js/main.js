var user_dict = {
  "darien@acorn.me": "Acorn_12",
  "steven@acorn.me": "Acorn_13"
};

function loginClick() {
  var user_input = $('#email').val();
  var pass_input = $('#pass').val();

    if (pass_input == user_dict[user_input.toLowerCase()]) {
      window.location.href = "file:///C:/Users/Darie/Desktop/Acorn_Biolabs/Dummy_Website/home.html";
    }
    else {
      alert("You entered an invalid password and/or email");
    }
  }

  function addClient() {
    window.location.href = "file:///C:/Users/Darie/Desktop/Acorn_Biolabs/Dummy_Website/add_client.html";
  }

  function addProspect() {
    window.location.href = "file:///C:/Users/Darie/Desktop/Acorn_Biolabs/Dummy_Website/add_prospect.html";
  }

  function seeClientList() {
    window.location.href = "file:///C:/Users/Darie/Desktop/Acorn_Biolabs/Dummy_Website/client_list.html";
  }

  function seeProspectList() {
    window.location.href = "file:///C:/Users/Darie/Desktop/Acorn_Biolabs/Dummy_Website/prospect_list.html";
  }
