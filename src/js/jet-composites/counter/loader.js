define(['ojs/ojcomposite', 'text!./counter.html', './counter', 'text!./jet-composite.json',
       'ojs/ojknockout', 'ojs/ojmodule', 'ojs/ojmodule-element'],
     function (Composite, view, viewModel, metadata) {
          Composite.register('demo-counter', {
               view: view,
               viewModel: viewModel,
               metadata: JSON.parse(metadata)
          });
     });
