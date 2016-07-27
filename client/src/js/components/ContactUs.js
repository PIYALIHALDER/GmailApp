var React=require('react');
var ContactUs = React.createClass({
  render: function() {
    return (
      <div>
      <div className="row">
        <div className="col-md-12">
         <h3 className="text-center">
           Reach Us!!
        </h3>
        </div>
        <div className="col-md-12"><address>
                <strong>Electronic city,</strong>


                  <strong>Hosur road,blore-01.</strong><br /> <abbr title="Phone">P:</abbr> (123) 456-7890
          </address>

                </div>
                <div className="row" align="center">
        <div className="col-md-4" pull-right>
        <img alt="Bootstrap Image Preview" src="http://i6.photobucket.com/albums/y218/InuPrincess/dexter1.jpg" className="img-circle" />
        <h2>
        Abc
        </h2>
        <p>
        Contact no +91-987653377
        </p>
       <p>
       mail-ID abc@gmail.com
      </p>

</div>

      <div className="col-md-4" >
      <img alt="Bootstrap Image Preview" src="http://i6.photobucket.com/albums/y218/InuPrincess/dexter1.jpg" className="img-circle" />
      <h2>
      Xyx
      </h2>
      <p>
      Contact no +91-987653377
      </p>
      <p>
      mail-ID abc@gmail.com
      </p>
</div>


      <div className="col-md-4" pull-left>
      <img className="headerpic" alt="Bootstrap Image Preview" src="http://i6.photobucket.com/albums/y218/InuPrincess/dexter1.jpg" className="img-circle" />
      <h2>
      Name
      </h2>
      <p>
      Contact no +91-987653377
      </p>
      <p>
      mail-ID abc@gmail.com
      </p>


      </div>
      </div>

        </div>
      </div>




    );
  }
});





module.exports=ContactUs;
