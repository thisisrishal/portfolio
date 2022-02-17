$(document).ready(function(){    
    $("#submit-form").validate({
        rules:{
            name:{
            required:true,
            
        },
        email:{
            required:true,
            email:true
        },
        subject:{
            required:true
        },
        message:{
            required:true
        }
        },
        messages:{
            name:{
                required:"Enter a valid name",
                Text:'Enter TExt only'
            },
            email:{
            required:'Please Enter Email id',
            email:'Enter Valid Email id'
        },
        subject:{
            required:'Please mention Subject'
        },
        message:{
            required:'Please leave some message'
        }
        }
        
    });
    
  })
