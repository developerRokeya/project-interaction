// show-hide
$(document).ready(function () {
  // hide
  $("#btn1").click(function () {
    $("h2").hide();
  });
});
// show
$(document).ready(function () {
  $("#btn2").click(function () {
    $("h3").show();
  });
});

// toggle
$(document).ready(function () {
  $("#btn3").click(function () {
    $(".h3").toggle(2000);
  });
  // fast
  $("#btn4").click(function () {
    $(".h3").toggle("fast");
  });
  // slow
  $("#btn5").click(function () {
    $(".h3").toggle("slow");
  });
});
// fadeout
$(document).ready(function () {
  $("#btn6").click(function () {
    $(".h4").fadeOut();
  });
  // fadein
  $("#btn7").click(function () {
    $(".h4").fadeIn();
  });
  // fadetohhl
  $("#btn8").click(function () {
    $(".h4").fadeToggle(1000);
  });
  // fadeto
  $("#btn9").click(function () {
    $(".h4").fadeTo(500, 0.5);
  });
});
$(document).ready(function () {
  $(".panel").click(function () {
    $(".flip").slideToggle();
  });
});
//interaction start
// draggable
$(function () {
  $("#dragg").draggable();
});
// droppable
$(function () {
  $("#draggable, #draggable-nonvalid").draggable();
  $("#droppable").droppable({
    accept: "#draggable",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover",
    },
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
    },
  });
});
//  resizable
$(function () {
  $("#resizable").resizable();
});
//Selectable
$(function () {
  $("#selectable").selectable();
});
//sortable
$(function () {
  $("#sortable").sortable();
  $("#sortable").disableSelection();
});
// interaction end
// widgets start
// accordian
$(function () {
  $("#accordion").accordion();
});
// datepicker
$(function () {
  $("#datepicker").datepicker();
});
// autocomplete
$(function () {
  var availableTags = [
    "Apple",
    "Ant",
    "Asparagas",
    "Book",
    "ball",
    "C++",
    "Cat",
    "COt",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Ssb",
    "Ssc",
  ];
  $("#tags").autocomplete({
    source: availableTags,
  });
});
// dialog
$(function () {
  $("#dialogbox").dialog();
});
// menu
$(function () {
  $("#menu").menu();
});
// Progressbar
$(function () {
  var progressTimer,
    progressbar = $("#progressbar"),
    progressLabel = $(".progress-label"),
    dialogButtons = [
      {
        text: "Cancel Download",
        click: closeDownload,
      },
    ],
    dialog = $("#dialog").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 2000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "Start Download",
        });
      },
    }),
    downloadButton = $("#downloadButton")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "Downloading...",
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text(
        "Current Progress: " + progressbar.progressbar("value") + "%"
      );
    },
    complete: function () {
      progressLabel.text("Complete!");
      dialog.dialog("option", "buttons", [
        {
          text: "Close",
          click: closeDownload,
        },
      ]);
      $(".ui-dialog button").last().trigger("focus");
    },
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog.dialog("option", "buttons", dialogButtons).dialog("close");
    progressbar.progressbar("value", false);
    progressLabel.text("Starting download...");
    downloadButton.trigger("focus");
  }
});
// selectmenu
$(function () {
  $("#speed").selectmenu();

  $("#files").selectmenu();

  $("#number").selectmenu().selectmenu("menuWidget").addClass("overflow");

  $("#salutation").selectmenu();
});
// tabs
$(function () {
  $("#tabs").tabs();
});
// toollips
$(function () {
  $(document).tooltip();
});
//  widgets end
// effect start
$(function () {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $("#effectTypes").val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if (selectedEffect === "scale") {
      options = { percent: 50 };
    } else if (selectedEffect === "transfer") {
      options = { to: "#button", className: "ui-effects-transfer" };
    } else if (selectedEffect === "size") {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $("#effect").effect(selectedEffect, options, 500, callback);
  }

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function () {
      $("#effect").removeAttr("style").hide().fadeIn();
    }, 1000);
  }

  // Set effect from select menu value
  $("#button").on("click", function () {
    runEffect();
    return false;
  });
});
//toggle
$(function () {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $("#effectTypes").val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if (selectedEffect === "scale") {
      options = { percent: 50 };
    } else if (selectedEffect === "size") {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $("#effect").hide(selectedEffect, options, 1000, callback);
  }

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function () {
      $("#effect").removeAttr("style").hide().fadeIn();
    }, 1000);
  }

  // Set effect from select menu value
  $("#button").on("click", function () {
    runEffect();
  });
});

// effect end
// utilities
$(function () {
  // the widget definition, where "custom" is the namespace,
  // "colorize" the widget name
  $.widget("custom.colorize", {
    // default options
    options: {
      red: 255,
      green: 0,
      blue: 0,

      // Callbacks
      change: null,
      random: null,
    },

    // The constructor
    _create: function () {
      this.element
        // add a class for theming
        .addClass("custom-colorize");

      this.changer = $("<button>", {
        text: "change",
        class: "custom-colorize-changer",
      })
        .appendTo(this.element)
        .button();

      // Bind click events on the changer button to the random method
      this._on(this.changer, {
        // _on won't call random when widget is disabled
        click: "random",
      });
      this._refresh();
    },

    // Called when created, and later when changing options
    _refresh: function () {
      this.element.css(
        "background-color",
        "rgb(" +
          this.options.red +
          "," +
          this.options.green +
          "," +
          this.options.blue +
          ")"
      );

      // Trigger a callback/event
      this._trigger("change");
    },

    // A public method to change the color to a random value
    // can be called directly via .colorize( "random" )
    random: function (event) {
      var colors = {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
      };

      // Trigger an event, check if it's canceled
      if (this._trigger("random", event, colors) !== false) {
        this.option(colors);
      }
    },

    // Events bound via _on are removed automatically
    // revert other modifications here
    _destroy: function () {
      // remove generated elements
      this.changer.remove();

      this.element
        .removeClass("custom-colorize")
        .enableSelection()
        .css("background-color", "transparent");
    },

    // _setOptions is called with a hash of all options that are changing
    // always refresh when changing options
    _setOptions: function () {
      // _super and _superApply handle keeping the right this-context
      this._superApply(arguments);
      this._refresh();
    },

    // _setOption is called for each individual option that is changing
    _setOption: function (key, value) {
      // prevent invalid color values
      if (/red|green|blue/.test(key) && (value < 0 || value > 255)) {
        return;
      }
      this._super(key, value);
    },
  });

  // Initialize with default options
  $("#my-widget1").colorize();

  // Initialize with two customized options
  $("#my-widget2").colorize({
    red: 60,
    blue: 60,
  });

  // Initialize with custom green value
  // and a random callback to allow only colors with enough green
  $("#my-widget3").colorize({
    green: 128,
    random: function (event, ui) {
      return ui.green > 128;
    },
  });

  // Click to toggle enabled/disabled
  $("#disable").on("click", function () {
    // use the custom selector created for each widget to find all instances
    // all instances are toggled together, so we can check the state from the first
    if ($(":custom-colorize").colorize("option", "disabled")) {
      $(":custom-colorize").colorize("enable");
    } else {
      $(":custom-colorize").colorize("disable");
    }
  });

  // Click to set options after initialization
  $("#green").on("click", function () {
    $(":custom-colorize").colorize("option", {
      red: 64,
      green: 250,
      blue: 8,
    });
  });
});
