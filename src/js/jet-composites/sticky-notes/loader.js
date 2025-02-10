define(['ojs/ojcomposite', 'text!./sticky-notes.html', './sticky-notes', 'text!./jet-composite.json'],
     function (Composite, view, viewModel, metadata) {
          Composite.register('sticky-notes', {
               view: view,
               viewModel: viewModel,
               metadata: JSON.parse(metadata)
          });
     });
