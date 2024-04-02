# maui

## windows title bar 隐藏
> 在program中添加，此代码适用于.net 8.0
```csharp
#if WINDOWS
    builder.ConfigureLifecycleEvents(events =>
    {
        events.AddWindows(windows =>
            windows.OnWindowCreated(window =>
            {
                var presenter = window?.AppWindow.Presenter;
                switch (presenter)
                {
                    case Microsoft.UI.Windowing.OverlappedPresenter overlappedPresenter:
                        // 以下属性必须全部声明才能生效
                        overlappedPresenter.IsMaximizable = false;
                        overlappedPresenter.IsResizable = false;
                        overlappedPresenter.IsMinimizable = false;
                        overlappedPresenter.SetBorderAndTitleBar(false, false);
                        //overlappedPresenter.Maximize();
                        break;
                }
            }));
    });
#endif
```