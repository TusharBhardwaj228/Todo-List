const arr =[];
    renderItems();
    function renderItems(){
      let todoItems = '';
      for(let i=0; i<arr.length; i++){
     
        let element = arr[i];
        let {name} = element;
        let {date} = element;
        let itemsPara = `
        <div>${name}</div>
        <div>${date}</div>
        <button class="delete-btn" onclick="
        arr.splice(${i}, 1);
        renderItems();
        ">Delete</button>`;
        todoItems += itemsPara;       
      }
      document.querySelector('.js-dv').innerHTML = todoItems;
    }

    function addItems(){
      let inputElement = document.querySelector('.js-input');
      let name = inputElement.value; 

      let inputElementDate = document.querySelector('.js-input-date');
      let date = inputElementDate.value;
      arr.push({
        name,
        date
      }
      );     
      inputElement.value = '';
      inputElementDate.value = '';
      renderItems();
    }

    function keysDown(event){
      if(event.key === 'Enter'){
        addItems();
      }
    }