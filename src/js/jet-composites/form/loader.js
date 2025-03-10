define(['ojs/ojcomposite', 'text!./form-component.html', './form-component', 'text!./jet-composite.json'],
     function (Composite, view, viewModel, metadata) {
          Composite.register('form-component', {
               view: view,
               viewModel: viewModel,
               metadata: JSON.parse(metadata)
          });
     });
