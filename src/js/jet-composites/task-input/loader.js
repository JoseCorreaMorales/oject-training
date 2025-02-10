define(['ojs/ojcomposite', 'text!./task-input.html', './task-input', 'text!./component.json'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('task-input', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
); 