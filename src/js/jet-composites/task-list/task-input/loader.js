define(["ojs/ojcomposite", "text!./task-input.html", "./task-input", "text!./jet-composite.json"],
     function (Composite, view, viewModel, metadata) {
          Composite.register("task-input", {
               view: view,
               viewModel: viewModel,
               metadata: JSON.parse(metadata)
          });
     });
