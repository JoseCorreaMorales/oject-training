define(['ojs/ojcomposite', 'text!./user-list.html', './user-list', 'text!./jet-composite.json'],
     function (Composite, view, viewModel, metadata) {
          Composite.register('user-list', {
               view: view,
               viewModel: viewModel,
               metadata: JSON.parse(metadata)
          });
     });
