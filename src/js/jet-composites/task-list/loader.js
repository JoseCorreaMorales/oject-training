define(["ojs/ojcomposite", "text!./task-list.html", "./task-list", "text!./jet-composite.json"],
     function (Composite, view, viewModel, metadata) {
          Composite.register("task-list", {
               view: view,
               viewModel: viewModel,
               metadata: JSON.parse(metadata)
          });
     });
