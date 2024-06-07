# ReactiveUI C# MVVM库

## 简单使用
ReactiveUI.Blazor 在 Blazor 中的状态管理实现是通过利用 ReactiveUI 的功能来处理状态管理和反应式编程。以下是具体的实现方式：

1. **创建 ViewModel**：
   在 ReactiveUI 中，ViewModel 是状态管理的核心部分。你可以创建一个继承自 `ReactiveObject` 的 ViewModel，并使用 `ReactiveCommand` 来处理用户交互。

   ```csharp
   using ReactiveUI;
   using System.Reactive;
   
   public class SimpleViewModel : ReactiveObject
   {
       private string _name;
       public string Name
       {
           get => _name;
           set => this.RaiseAndSetIfChanged(ref _name, value);
       }
   
       public ReactiveCommand<Unit, Unit> SubmitCommand { get; }
   
       public SimpleViewModel()
       {
           SubmitCommand = ReactiveCommand.Create(() => { /* Your logic here */ });
       }
   }
   ```

2. **在 Blazor 组件中绑定 ViewModel**：
   将 ViewModel 注入到 Blazor 组件中，并绑定 ViewModel 的属性和命令到组件的 UI 元素。

   ```razor
   @page "/simple"
   @using ReactiveUI.Blazor
   @inject SimpleViewModel ViewModel

   <EditForm Model="@ViewModel">
       <DataAnnotationsValidator />
       <ValidationSummary />
       
       <div>
           <label>Name:</label>
           <InputText @bind-Value="ViewModel.Name" />
       </div>
       
       <button @onclick="ViewModel.SubmitCommand.Execute">Submit</button>
   </EditForm>
   ```

3. **在 Blazor 项目中注册 ViewModel**：
   在 `Program.cs` 中注册 ViewModel，以便在 Blazor 组件中进行依赖注入。

   ```csharp
   using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
   using Microsoft.Extensions.DependencyInjection;
   
   var builder = WebAssemblyHostBuilder.CreateDefault(args);
   builder.RootComponents.Add<App>("#app");
   
   builder.Services.AddSingleton<SimpleViewModel>();
   
   await builder.Build().RunAsync();
   ```

通过这种方式，ReactiveUI.Blazor 能够在 Blazor 中实现状态管理，使得你可以利用 ReactiveUI 的强大功能来处理复杂的状态逻辑和反应式编程。

## WhenAnyValue
`WhenAnyValue` 是 ReactiveUI 中的一个扩展方法，用于监测属性值的变化。与 `WhenAny` 相比，`WhenAnyValue` 更加简洁，并且在大多数情况下更为常用，因为它不需要知道属性变化的发送者或表达式。

### 作用
`WhenAnyValue` 主要用于监测单个或多个属性的变化，并在属性变化时执行相应的逻辑。它通过订阅属性的变化事件来实现这一点，并且在订阅时会立即提供当前的属性值。

### 使用方法
下面是一些基本的使用示例：

#### 监测单个属性的变化
你可以使用 `WhenAnyValue` 来监测单个属性的变化，并在属性变化时执行相应的操作：

```csharp
this.WhenAnyValue(x => x.SomeProperty)
    .Subscribe(newValue => Console.WriteLine($"SomeProperty changed to {newValue}"));
```

#### 监测多个属性的变化
你也可以监测多个属性的变化，并在任意一个属性变化时执行相应的操作：

```csharp
this.WhenAnyValue(
    x => x.Property1,
    x => x.Property2,
    (prop1, prop2) => new { prop1, prop2 })
    .Subscribe(x => Console.WriteLine($"Property1: {x.prop1}, Property2: {x.prop2}"));
```

### 示例代码
以下是一个具体的示例，展示了如何在 ViewModel 中使用 `WhenAnyValue`：

```csharp
public class MyViewModel : ReactiveObject
{
    private string _name;
    public string Name
    {
        get => _name;
        set => this.RaiseAndSetIfChanged(ref _name, value);
    }

    private int _age;
    public int Age
    {
        get => _age;
        set => this.RaiseAndSetIfChanged(ref _age, value);
    }

    public MyViewModel()
    {
        this.WhenAnyValue(x => x.Name)
            .Subscribe(newName => Console.WriteLine($"Name changed to {newName}"));

        this.WhenAnyValue(x => x.Age)
            .Subscribe(newAge => Console.WriteLine($"Age changed to {newAge}"));
    }
}
```

在这个示例中，当 `Name` 或 `Age` 属性发生变化时，会输出属性的新值。

### 总结
`WhenAnyValue` 是一个非常有用的工具，用于监测属性的变化并执行相应的逻辑。它简化了属性变化的监测过程，并且在大多数情况下比 `WhenAny` 更加直观和易于使用。

## ObservableAsPropertyHelper
`ObservableAsPropertyHelper<T>` 是 ReactiveUI 中的一个重要工具，用于将 `Observable<T>` 转换为视图模型中的属性。它的主要作用和使用方法如下：

### 作用
`ObservableAsPropertyHelper<T>` 代表了一个 `Observable<T>`，即随时间变化的值流。它可以将这些值视为事件，并将新值视为事件参数。通常用于以下场景：
1. **输出属性**：将 `Observable` 转换为视图模型属性，使得属性的值由 `Observable` 决定。这些属性通常是只读的。
2. **通知观察者**：在不需要视图和视图模型之间进行双向绑定的情况下，使用 `ObservableAsPropertyHelper` 可以通知观察者视图模型中只读值的变化。

### 使用方法
#### 声明输出属性
首先，我们需要声明一个输出属性，使用 `ObservableAsPropertyHelper<T>` 类：

```csharp
private readonly ObservableAsPropertyHelper<string> firstName;
public string FirstName => firstName.Value;
```

#### 初始化输出属性
然后，我们需要在视图模型的构造函数中初始化这个输出属性。通常，我们会使用 `WhenAnyValue` 或其他 `Observable` 来设置输出属性的值：

```csharp
public MyViewModel()
{
    this.WhenAnyValue(x => x.SomeProperty)
        .ToProperty(this, x => x.FirstName, out firstName);
}
```

在这个示例中，`WhenAnyValue` 用于监测 `SomeProperty` 的变化，并将其值更新到 `FirstName` 输出属性。

### 示例代码
以下是一个具体的示例，展示了如何在视图模型中使用 `ObservableAsPropertyHelper<T>`：

```csharp
public class MyViewModel : ReactiveObject
{
    private readonly ObservableAsPropertyHelper<string> firstName;
    public string FirstName => firstName.Value;

    private string someProperty;
    public string SomeProperty
    {
        get => someProperty;
        set => this.RaiseAndSetIfChanged(ref someProperty, value);
    }

    public MyViewModel()
    {
        this.WhenAnyValue(x => x.SomeProperty)
            .ToProperty(this, x => x.FirstName, out firstName);
    }
}
```

在这个示例中，当 `SomeProperty` 发生变化时，`FirstName` 输出属性会自动更新。

### 性能注意事项
需要注意的是，如果你使用的是不可变集合，每次更新时创建一个新集合会降低性能。在这种情况下，建议使用 DynamicData 来处理集合的变化。

### 总结
`ObservableAsPropertyHelper<T>` 是一个强大的工具，用于将 `Observable` 转换为视图模型中的属性，使得属性的值由 `Observable` 决定。它在创建只读输出属性和通知观察者视图模型中只读值的变化方面非常有用。


## WhenAny
`WhenAny` 是 ReactiveUI 中的一组扩展方法，它允许你在对象上的属性发生变化时获得通知。以下是 `WhenAny` 在 ViewModel 中监测属性变化的具体方式：

1. **基本用法**：
   `WhenAny` 可以监测单个或多个属性的变化，并在属性变化时触发相应的逻辑。它将传递一个 `ObservedChange` 对象，该对象暴露了以下属性：
   - `Value`：更新后的值
   - `Sender`：属性发生变化的对象
   - `Expression`：发生变化的表达式（通常不需要外部用户使用）

   ```csharp
   this.WhenAny(x => x.ComboBox.SelectedItem)
       .Subscribe(x => Console.WriteLine($"The {x.Sender} changed value to {x.Value}"));
   ```

   在上面的例子中，当 `ComboBox.SelectedItem` 属性发生变化时，会输出 `Sender` 和新属性值。

2. **支持的属性类型**：
   `WhenAny` 支持多种属性类型，包括 `INotifyPropertyChanged`、`DependencyProperty` 和 `BindableProperty`。这意味着你可以在 ViewModel 中使用常见的属性更改通知机制，如 `INotifyPropertyChanged`。

3. **冷观察者和行为语义**：
   `WhenAny` 具有冷观察者和行为语义。这意味着它不会立即开始发出事件，直到有订阅者订阅它。

4. **声明式逻辑**：
   `WhenAny` 允许你使用 Rx 操作符以声明式的方式组合和表达逻辑。由于在可观察上下文中对时间和异步性的优先处理，处理这些概念变得更容易。

综上所述，`WhenAny` 是 ReactiveUI 中用于监测属性变化的强大工具，它不仅能够处理单个属性变化，还能处理多个属性变化，并且支持多种属性类型。

## bind和OneWayBind
`Bind` 和 `OneWayBind` 是 ReactiveUI 中用于绑定视图和视图模型的两个重要方法。它们的作用和用法如下：

### 作用
1. **Bind**:
   - **作用**：`Bind` 方法用于创建双向绑定。这意味着当视图模型的属性发生变化时，视图会自动更新，反之亦然。
   - **使用场景**：适用于需要在视图和视图模型之间保持同步的场景，例如表单输入。

2. **OneWayBind**:
   - **作用**：`OneWayBind` 方法用于创建单向绑定。这意味着只有当视图模型的属性发生变化时，视图会自动更新，但视图的变化不会影响视图模型。
   - **使用场景**：适用于只需要从视图模型向视图传递数据的场景，例如显示只读数据。

### 使用方法
以下是 `Bind` 和 `OneWayBind` 的基本用法示例：

#### Bind
```csharp
// 假设我们有一个视图模型属性和一个视图控件
this.Bind(ViewModel, vm => vm.SomeProperty, v => v.SomeControl.Text);
```
在这个示例中，`SomeProperty` 是视图模型中的属性，`SomeControl.Text` 是视图中的控件属性。`Bind` 方法会将这两个属性进行双向绑定。

#### OneWayBind
```csharp
// 假设我们有一个视图模型属性和一个视图控件
this.OneWayBind(ViewModel, vm => vm.SomeProperty, v => v.SomeControl.Text);
```
在这个示例中，`SomeProperty` 是视图模型中的属性，`SomeControl.Text` 是视图中的控件属性。`OneWayBind` 方法会将视图模型的属性单向绑定到视图控件。

### 绑定管理
你可以使用 `WhenActivated` 方法来管理绑定的生命周期：

```csharp
this.WhenActivated(disposables =>
{
    this.Bind(ViewModel, vm => vm.SomeProperty, v => v.SomeControl.Text)
        .DisposeWith(disposables);
        
    this.OneWayBind(ViewModel, vm => vm.AnotherProperty, v => v.AnotherControl.Text)
        .DisposeWith(disposables);
});
```
在这个示例中，`WhenActivated` 方法确保绑定在视图激活时创建，并在视图不再激活时自动清理。

### 总结
- **Bind**：用于双向绑定，适用于需要视图和视图模型之间保持同步的场景。
- **OneWayBind**：用于单向绑定，适用于只需要从视图模型向视图传递数据的场景。