// Event bubbling

<div class="parent" onclick="parentCall()">
  <div class="child" onclick="childCall()">
    child
  </div>
</div>



<script>
{/* //When call bottom to parent that is called event bubbling that is part of event propagation
// When call top to bottom that is called capture phase 
//When call bottom to top that is called bubble phase */}

const parentCall = () => {
   alert("Parent Div call")
   console.log("Parent Div call")
}


const childCall = () => {
   alert("Child Div call")
   console.log("Child Div call")
   event.stopPropagation()// If i want run only this not parent then we will use this method stopPropagation
}

</script>



<style>
  .parent {
  width: 200px;
  height: 200px;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.child {
  width: 80px;
  height: 80px;
  background: white;
  cursor: pointer;
}
</style>