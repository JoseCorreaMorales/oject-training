//define(['ojs/ojcomposite', 'text!./counter.html', './counter', 'text!./jet-composite.json'],
define(['ojs/ojcomposite', 'text!./counter.html', './counter', 'text!./jet-composite.json'],

     function (Composite, view, viewModel, metadata) {
          Composite.register('demo-counter', {
               view: view,
               viewModel: viewModel,
               metadata: JSON.parse(metadata)
          });
     });
