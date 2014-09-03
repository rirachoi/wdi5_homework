// var app = app || {};

// app.TodoView = Backbone.View.extend({

//   tagName: 'li',

//   template: _.template( $('#item_template').html() ),

//   events: {
//     'click .toggle': 'togglecompleted',
//     'dbclick label': 'edit',
//     'click .destroy': 'clear',
//     'keypress .edit': 'updateOnEnter',
//     'blur .edit': 'close'
//   },

//   initialize: function(){
//     this.listenTo(this.model, 'change', this.render);
//     this.listenTo(this.model, 'destroy', this.remove);
//     this.listenTo(this.model, 'visible', this.toggleVisible)
//   },

//   render: function(){
//     this.$el.html( this.template(this.model.attributes));

//     this.$el.toggleClass('completed', this.model.get('completed'));
//     this.toggleVisible();

//     this.$input = this.$('.edit');
//     return this;
//   },

//   toggleVisible: function(){
//     this.$el.toggleClass('hidden', this.isHidden());
//   },

//   isHidden: function(){
//     var isCompleted = this.model.get('completed');
//     return (
//       (!isCompleted && app.TodoFilter === 'completed') || (isCompleted && app.TodoFilter === 'active')
//       );
//   },

//   toggleCompleted: function(){
//     this.model.toggle();
//   },

//   edit: function(){
//     this.$el.addClass('editing');
//     this.$input.focus();
//   },

//   close: function(){
//     var value = this.$input.val().trim();

//     if (value) {
//       this.model.save({title: value});
//     } else{
//       this.clear();
//     }

//     this.$el.removeClass('editing');
//   },

//   updateOnEnter: function(e){
//     if(e.which === ENTER_KEY){
//       this.close();
//     }
//   },

//   clear: function(){
//     this.model.destroy();
//   }

// });

 var app = app || {};

  // Todo Item View
  // -------u-------

  // The DOM element for a todo item...
  app.TodoView = Backbone.View.extend({

    //... is a list tag.
    tagName: 'li',

    // Cache the template function for a single item.
    template: _.template( $('#item-template').html() ),

    // The DOM events specific to an item.
    events: {
      'click .toggle': 'togglecompleted', // NEW
      'dblclick label': 'edit',
      'click .destroy': 'clear',           // NEW
      'keypress .edit': 'updateOnEnter',
      'blur .edit': 'close'
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);        // NEW
      this.listenTo(this.model, 'visible', this.toggleVisible); // NEW
    },

    // Re-render the titles of the todo item.
    render: function() {
      this.$el.html( this.template( this.model.attributes ) );

      this.$el.toggleClass( 'completed', this.model.get('completed') ); // NEW
      this.toggleVisible();                                             // NEW

      this.$input = this.$('.edit');
      return this;
    },

    // NEW - Toggles visibility of item
    toggleVisible : function () {
      this.$el.toggleClass( 'hidden',  this.isHidden());
    },

    // NEW - Determines if item should be hidden
    isHidden : function () {
      var isCompleted = this.model.get('completed');
      return ( // hidden cases only
        (!isCompleted && app.TodoFilter === 'completed')
        || (isCompleted && app.TodoFilter === 'active')
      );
    },

    // NEW - Toggle the `"completed"` state of the model.
    togglecompleted: function() {
      this.model.toggle();
    },

    // Switch this view into `"editing"` mode, displaying the input field.
    edit: function() {
      this.$el.addClass('editing');
      this.$input.focus();
    },

    // Close the `"editing"` mode, saving changes to the todo.
    close: function() {
      var value = this.$input.val().trim();

      if ( value ) {
        this.model.save({ title: value });
      } else {
        this.clear(); // NEW
      }

      this.$el.removeClass('editing');
    },

    // If you hit `enter`, we're through editing the item.
    updateOnEnter: function( e ) {
      if ( e.which === ENTER_KEY ) {
        this.close();
      }
    },

    // NEW - Remove the item, destroy the model from *localStorage* and delete its view.
    clear: function() {
      this.model.destroy();
    }
  });