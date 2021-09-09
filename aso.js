var config = {
    container: "#aso-container",
    animateOnInit: true,
    node: {
        collapsable: true
    },
    animation: {
        nodeAnimation: "easeOutBounce",
        nodeSpeed: 700,
        connectorsAnimation: "bounce",
        connectorsSpeed: 700
    }
},

// Level 0
// Root (android_app)

android_app = {
    HTMLclass: "aso-root",
    text: {
        title: "root",
        id: "id = android_app",
    },
    collapsed: true
},

// Level 1
// Children of android_app [A_APP]

app_features = {
    parent: android_app,
    text: {
        title: "node",
        id: "id = app_features",
        parent: "parent_id = android_app"
    },
    collapsed: true
},

app_behaviours = {
    parent: android_app,
    text: {
        title: "node",
        id: "id = app_behaviours",
        parent: "parent_id = android_app"
    },
    collapsed: true
},

app_data_storage = {
    parent: android_app,
    text: {
        title: "node",
        id: "id = app_data_storage",
        parent: "parent_id = android_app"
    },
    collapsed: true
},

app_risks = {
    parent: android_app,
    text: {
        title: "node",
        id: "id = app_risks",
        parent: "parent_id = android_app"
    },
    collapsed: true
},

// Level 2
// Children of app_features [A_FEAT]

app_metadata = {
    parent: app_features,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = app_metadata",
        parent: "parent_id = app_features"
    },
    collapsed: true
},

app_permissions = {
    parent: app_features,
    text: {
        title: "node",
        id: "id = app_permissions",
        parent: "parent_id = app_features"
    },
    collapsed: true
},

app_reputation = {
    parent: app_features,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = app_reputation",
        parent: "parent_id = app_features"
    },
    collapsed: true
},

// Children of app_behaviours [A_BEH]

send_sms_behaviour = {
    parent: app_behaviours,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = send_sms_behaviour",
        parent: "parent_id = app_behaviours"
    },
    collapsed: true
},

initiate_call_behaviour = {
    parent: app_behaviours,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = initiate_call_behaviour",
        parent: "parent_id = app_behaviours"
    },
    collapsed: true
},

network_activity = {
    parent: app_behaviours,
    text: {
        title: "node",
        id: "id = network_activity",
        parent: "parent_id = app_behaviours"
    },
    collapsed: true
},

// Children of app_data_storage [A_STOR]

app_preferences = {
    HTMLclass: "aso-leaf",
    parent: app_data_storage,
    text: {
        title: "leaf",
        id: "id = app_preferences",
        parent: "parent_id = app_data_storage"
    },
    collapsed: true
},

app_internal_storage = {
    HTMLclass: "aso-leaf",
    parent: app_data_storage,
    text: {
        title: "leaf",
        id: "id = app_internal_storage",
        parent: "parent_id = app_data_storage"
    },
    collapsed: true
},

external_storage = {
    HTMLclass: "aso-leaf",
    parent: app_data_storage,
    text: {
        title: "leaf",
        id: "id = external_storage",
        parent: "parent_id = app_data_storage"
    },
    collapsed: true
},

// Children of app_risks [A_RISKS]

app_vulnerabilities = {
    parent: app_risks,
    text: {
        title: "node",
        id: "id = app_vulnerabilities",
        parent: "parent_id = app_risks"
    },
    collapsed: true
},

app_risky_components = {
    parent: app_risks,
    text: {
        title: "node",
        id: "id = app_risky_components",
        parent: "parent_id = app_risks"
    },
    collapsed: true
},

// Level 3
// Children of send_sms_behaviour

high_sms_frequency = {
    HTMLclass: "aso-state-variable",
    parent: send_sms_behaviour,
    text: {
        title: "state_variable",
        id: "id = high_sms_frequency",
        leaf: "leaf_id = send_sms_behaviour",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 7",
        miii: "miii = 4",
        mxii: "mxii = 8",
    }
},

sms_to_known_dodgy_numbers = {
    HTMLclass: "aso-state-variable",
    parent: send_sms_behaviour,
    text: {
        title: "state_variable",
        id: "id = sms_to_known_dodgy_numbers",
        leaf: "leaf_id = send_sms_behaviour",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 7",
        miii: "miii = 2",
        mxii: "mxii = 8",
    }
},

// Children of initiate_call_behaviour

high_call_frequency = {
    HTMLclass: "aso-state-variable",
    parent: initiate_call_behaviour,
    text: {
        title: "state_variable",
        id: "id = initiate_call_behaviour",
        leaf: "leaf_id = send_sms_behaviour",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 7",
        miii: "miii = 4",
        mxii: "mxii = 8",
    }
},

call_to_known_dodgy_numbers = {
    HTMLclass: "aso-state-variable",
    parent: initiate_call_behaviour,
    text: {
        title: "state_variable",
        id: "id = call_to_known_dodgy_numbers",
        leaf: "leaf_id = initiate_call_behaviour",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 7",
        miii: "miii = 2",
        mxii: "mxii = 8",
    }
},

// Children of network_activity

connection_to_dodgy_servers = {
    parent: network_activity,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = connection_to_dodgy_servers",
        parent: "parent_id = network_activity"
    },
    collapsed: true
},

unsafe_protocols = {
    parent: network_activity,
    text: {
        title: "node",
        id: "id = unsafe_protocols",
        parent: "parent_id = network_activity"
    },
    collapsed: true
},

// Children of app_preferences

excessive_preferences_size = {
    HTMLclass: "aso-state-variable",
    parent: app_preferences,
    text: {
        title: "state_variable",
        id: "id = excessive_preferences_size",
        leaf: "leaf_id = app_preferences",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 6",
        miii: "miii = 1",
        mxii: "mxii = 7",
    }
},

// Children of app_internal_storage

excessive_internal_storage_size = {
    HTMLclass: "aso-state-variable",
    parent: app_internal_storage,
    text: {
        title: "state_variable",
        id: "id = excessive_internal_storage_size",
        leaf: "leaf_id = app_internal_storage",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 6",
        miii: "miii = 1",
        mxii: "mxii = 7",
    }
},

// Children of external_storage

unneeded_access_to_external_storage = {
    HTMLclass: "aso-state-variable",
    parent: external_storage,
    text: {
        title: "state_variable",
        id: "id = unneeded_access_to_external_storage",
        leaf: "leaf_id = external_storage",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 8",
        miii: "miii = 5",
        mxii: "mxii = 9",
    }
},

excessive_occupation_of_external_storage = {
    HTMLclass: "aso-state-variable",
    parent: external_storage,
    text: {
        title: "state_variable",
        id: "id = excessive_occupation_of_external_storage",
        leaf: "leaf_id = external_storage",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 6",
        miii: "miii = 1",
        mxii: "mxii = 7",
    }
},

// Children of app_metadata

app_info = {
    parent: app_metadata,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = app_info",
        leaf: "leaf_id = app_metadata",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    }
},

// Children of app_permissions

protection_normal_permissions = {
    parent: app_permissions,
    text: {
        title: "node",
        id: "id = protection_normal_permissions",
        parent: "parent_id = app_permissions"
    },
    collapsed: true
},

protection_signature_permissions = {
    parent: app_permissions,
    text: {
        title: "node",
        id: "id = protection_signature_permissions",
        parent: "parent_id = app_permissions"
    },
    collapsed: true
},

dangerous_permissions = {
    parent: app_permissions,
    text: {
        title: "node",
        id: "id = dangerous_permissions",
        parent: "parent_id = app_permissions"
    },
    collapsed: true
},

special_permissions = {
    parent: app_permissions,
    text: {
        title: "node",
        id: "id = special_permissions",
        parent: "parent_id = app_permissions"
    },
    collapsed: true
},

// Children of app_reputation

known_malware = {
    parent: app_reputation,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = known_malware",
        leaf: "parent_id = app_reputation",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 10",
        miii: "miii = 10",
        mxii: "mxii = 10",
    },
},

heuristic_malware = {
    parent: app_reputation,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = heuristic_malware",
        leaf: "parent_id = app_reputation",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 10",
        miii: "miii = 8",
        mxii: "mxii = 10",
    },
},

// Children of app_vulnerabilities

known_vulnerable_libraries = {
    parent: app_vulnerabilities,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = known_vulnerable_libraries",
        parent: "parent_id = app_vulnerabilities"
    },
    collapsed: true
},

unneeded_permissions = {
    parent: app_vulnerabilities,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = unneeded_permissions",
        parent: "parent_id = app_vulnerabilities"
    },
    collapsed: true
},

// Children of app_risky_components

webviews = {
    parent: app_risky_components,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = webviews",
        parent: "parent_id = app_risky_components"
    },
    collapsed: true
},

// Level 4
// Children of connection_to_dodgy_servers

connection_to_dodgy_server = {
    parent: connection_to_dodgy_servers,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = connection_to_dodgy_server",
        leaf: "parent_id = connection_to_dodgy_servers",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 8",
        miii: "miii = 5",
        mxii: "mxii = 9",
    },
},

// Children of unsafe_protocols

cleartext_protocols = {
    parent: unsafe_protocols,
    text: {
        title: "node",
        id: "id = cleartext_protocols",
        parent: "parent_id = unsafe_protocols"
    },
    collapsed: true
},

weak_or_broken_protocols = {
    parent: unsafe_protocols,
    text: {
        title: "node",
        id: "id = weak_or_broken_protocols",
        parent: "parent_id = unsafe_protocols"
    },
    collapsed: true
},

weak_or_broken_protocol_parameters = {
    parent: unsafe_protocols,
    text: {
        title: "node",
        id: "id = weak_or_broken_protocol_parameters",
        parent: "parent_id = unsafe_protocols"
    },
    collapsed: true
},

// Children of protection_normal_permissions

access_location_extra_commands = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = access_location_extra_commands",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

access_network_state = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = access_network_state",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

access_notification_policy = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = access_notification_policy",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

access_wifi_state = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = access_wifi_state",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

bluetooth = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bluetooth",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

bluetooth_admin = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bluetooth_admin",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

broadcast_sticky = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = broadcast_sticky",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

change_network_state = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = change_network_state",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

change_wifi_multicast_state = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = change_wifi_multicast_state",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

change_wifi_state = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = change_wifi_state",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

disable_keyguard = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = disable_keyguard",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

expand_status_bar = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = expand_status_bar",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

foreground_service = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = foreground_service",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

get_package_size = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = get_package_size",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

install_shortcut = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = install_shortcut",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

internet = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = internet",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

kill_background_process = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = kill_background_process",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

manage_own_calls = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = manage_own_calls",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

modify_audio_settings = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = modify_audio_settings",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

nfc = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = nfc",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

read_sync_settings = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = read_sync_settings",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

read_sync_stats = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = read_sync_stats",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

receive_boot_completed = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = receive_boot_completed",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

reorder_tasks = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = reorder_tasks",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

request_companion_run_in_background = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = request_companion_run_in_background",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

request_companion_use_data_in_background = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = request_companion_use_data_in_background",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

request_delete_packages = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = request_delete_packages",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

request_ignore_battery_optimizations = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = request_ignore_battery_optimizations",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

set_alarm = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = set_alarm",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

set_wallpaper = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = set_wallpaper",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

set_wallpaper_hints = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = set_wallpaper_hints",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

transmit_ir = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = transmit_ir",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

use_fingerprint = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = use_fingerprint",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

vibrate = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = vibrate",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

wake_lock = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = wake_lock",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

write_sync_settings = {
    parent: protection_normal_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = write_sync_settings",
        parent: "parent_id = protection_normal_permissions"
    },
    collapsed: true
},

// Children of protection_signature_permissions

bind_accessibility_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_accessibility_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_autofill_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_autofill_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_carrier_services = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_carrier_services",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_chooser_target_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_chooser_target_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_condition_provider_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_condition_provider_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_device_admin = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_device_admin",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_dream_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_dream_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_incall_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_incall_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_input_method = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_input_method",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_midi_device_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_midi_device_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_nfc_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_nfc_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_notification_listener_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_notification_listener_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_print_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_print_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_screening_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_screening_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_telecom_connection_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_telecom_connection_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_text_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_text_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_tv_input = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_tv_input",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_visual_voicemail_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_visual_voicemail_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_voice_interaction = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_voice_interaction",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_vpn_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_vpn_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_vr_listener_service = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_vr_listener_service",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

bind_wallpaper = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = bind_wallpaper",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

clear_app_cache = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = clear_app_cache",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

manage_documents = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = manage_documents",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

read_voicemail = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = read_voicemail",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

request_install_packages = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = request_install_packages",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

/*
system_alert_window = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = system_alert_window",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},
*/

/*
write_settings = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = write_settings",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},
*/

write_voicemail = {
    parent: protection_signature_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = write_voicemail",
        parent: "parent_id = protection_signature_permissions"
    },
    collapsed: true
},

// Children of dangerous_permissions

calendar_permissions = {
    parent: dangerous_permissions,
    text: {
        title: "node",
        id: "id = calendar_permissions",
        parent: "parent_id = dangerous_permissions"
    },
    collapsed: true
},

call_log_permissions = {
    parent: dangerous_permissions,
    text: {
        title: "node",
        id: "id = call_log_permissions",
        parent: "parent_id = dangerous_permissions"
    },
    collapsed: true
},

camera_permissions = {
    parent: dangerous_permissions,
    text: {
        title: "node",
        id: "id = camera_permissions",
        parent: "parent_id = dangerous_permissions"
    },
    collapsed: true
},

contacts_permissions = {
    parent: dangerous_permissions,
    text: {
        title: "node",
        id: "id = contacts_permissions",
        parent: "parent_id = dangerous_permissions"
    },
    collapsed: true
},

location_permissions = {
    parent: dangerous_permissions,
    text: {
        title: "node",
        id: "id = location_permissions",
        parent: "parent_id = dangerous_permissions"
    },
    collapsed: true
},

microphone_permissions = {
    parent: dangerous_permissions,
    text: {
        title: "node",
        id: "id = microphone_permissions",
        parent: "parent_id = dangerous_permissions"
    },
    collapsed: true
},

phone_permissions = {
    parent: dangerous_permissions,
    text: {
        title: "node",
        id: "id = phone_permissions",
        parent: "parent_id = dangerous_permissions"
    },
    collapsed: true
},

sensors_permissions = {
    parent: dangerous_permissions,
    text: {
        title: "node",
        id: "id = sensors_permissions",
        parent: "parent_id = dangerous_permissions"
    },
    collapsed: true
},

sms_permissions = {
    parent: dangerous_permissions,
    text: {
        title: "node",
        id: "id = sms_permissions",
        parent: "parent_id = dangerous_permissions"
    },
    collapsed: true
},

storage_permissions = {
    parent: dangerous_permissions,
    text: {
        title: "node",
        id: "id = storage_permissions",
        parent: "parent_id = dangerous_permissions"
    },
    collapsed: true
},

// Children of special_permissions

system_alert_window = {
    parent: special_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = system_alert_window",
        parent: "parent_id = special_permissions"
    },
    collapsed: true
},

write_settings = {
    parent: special_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = write_settings",
        parent: "parent_id = special_permissions"
    },
    collapsed: true
},

// Children of known_vulnerable_libraries

vulnerable_library_instances = {
    parent: known_vulnerable_libraries,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = vulnerable_library_instances",
        leaf: "parent_id = known_vulnerable_libraries",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 9",
        miii: "miii = 6",
        mxii: "mxii = 9",
    },
},

// Children of unneeded_permissions
unneeded_permissions_instances = {
    parent: unneeded_permissions,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = unneeded_permissions_instances",
        leaf: "parent_id = unneeded_permissions",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 7",
        miii: "miii = 1",
        mxii: "mxii = 8",
    },
},

// Children of webviews

too_broad_js_interfaces = {
    parent: webviews,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = too_broad_js_interfaces",
        leaf: "parent_id = webviews",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 9",
        miii: "miii = 2",
        mxii: "mxii = 9",
    },
},


// Level 5
// Children of cleartext_protocols

plain_http = {
    parent: cleartext_protocols,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = plain_http",
        parent: "parent_id = cleartext_protocols"
    },
    collapsed: true
},

plain_dns = {
    parent: cleartext_protocols,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = plain_dns",
        parent: "parent_id = cleartext_protocols"
    },
    collapsed: true
},

plain_ftp = {
    parent: cleartext_protocols,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = plain_ftp",
        parent: "parent_id = cleartext_protocols"
    },
    collapsed: true
},

custom_socket_protocol = {
    parent: cleartext_protocols,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = custom_socket_protocol",
        parent: "parent_id = cleartext_protocols"
    },
    collapsed: true
},

// Children of weak_or_broken_protocols

ssl3_0 = {
    parent: weak_or_broken_protocols,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = ssl3_0",
        parent: "parent_id = weak_or_broken_protocols"
    },
    collapsed: true
},

tls1_0 = {
    parent: weak_or_broken_protocols,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = tls1_0",
        parent: "parent_id = weak_or_broken_protocols"
    },
    collapsed: true
},

tls1_1 = {
    parent: weak_or_broken_protocols,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = tls1_1",
        parent: "parent_id = weak_or_broken_protocols"
    },
    collapsed: true
},

// Children of weak_or_broken_protocol_parameters

weak_or_broken_ciphersuites = {
    parent: weak_or_broken_protocol_parameters,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = weak_or_broken_ciphersuites",
        parent: "parent_id = weak_or_broken_protocol_parameters"
    },
    collapsed: true
},

weak_or_broken_kex = {
    parent: weak_or_broken_protocol_parameters,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = weak_or_broken_kex",
        parent: "parent_id = weak_or_broken_protocol_parameters"
    },
    collapsed: true
},

unsafe_negotiation = {
    parent: weak_or_broken_protocol_parameters,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = unsafe_negotiation",
        parent: "parent_id = weak_or_broken_protocol_parameters"
    },
    collapsed: true
},

insufficient_identity_validation = {
    parent: weak_or_broken_protocol_parameters,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = insufficient_identity_validation",
        parent: "parent_id = weak_or_broken_protocol_parameters"
    },
    collapsed: true
},

// Grandchildren of protection_normal_permissions

access_location_extra_commands_status = {
    parent: access_location_extra_commands,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = access_location_extra_commands_status",
        leaf: "parent_id = access_location_extra_commands",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

access_network_state_status = {
    parent: access_network_state,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = access_network_state_status",
        leaf: "parent_id = access_network_state",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

access_notification_policy_status = {
    parent: access_notification_policy,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = access_notification_policy_status",
        leaf: "parent_id = access_notification_policy",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

access_wifi_state_status = {
    parent: access_wifi_state,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = access_wifi_state_status",
        leaf: "parent_id = access_wifi_state",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bluetooth_status = {
    parent: bluetooth,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bluetooth_status",
        leaf: "parent_id = bluetooth",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bluetooth_admin_status = {
    parent: bluetooth_admin,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bluetooth_admin_status",
        leaf: "parent_id = bluetooth_admin",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

broadcast_sticky_status = {
    parent: broadcast_sticky,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = broadcast_sticky_status",
        leaf: "parent_id = broadcast_sticky",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

change_network_state_status = {
    parent: change_network_state,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = change_network_state_status",
        leaf: "parent_id = change_network_state",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

change_wifi_multicast_state_status = {
    parent: change_wifi_multicast_state,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = change_wifi_multicast_state_status",
        leaf: "parent_id = change_wifi_multicast_state",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

change_wifi_state_status = {
    parent: change_wifi_state,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = change_wifi_state_status",
        leaf: "parent_id = change_wifi_state",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

disable_keyguard_status = {
    parent: disable_keyguard,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = disable_keyguard_status",
        leaf: "parent_id = disable_keyguard",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

expand_status_bar_status = {
    parent: expand_status_bar,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = expand_status_bar_status",
        leaf: "parent_id = expand_status_bar",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

foreground_service_status = {
    parent: foreground_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = foreground_service_status",
        leaf: "parent_id = foreground_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

get_package_size_status = {
    parent: get_package_size,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = get_package_size_status",
        leaf: "parent_id = get_package_size",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

install_shortcut_status = {
    parent: install_shortcut,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = install_shortcut_status",
        leaf: "parent_id = install_shortcut",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

internet_status = {
    parent: internet,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = internet_status",
        leaf: "parent_id = internet",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

kill_background_process_status = {
    parent: kill_background_process,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = kill_background_process_status",
        leaf: "parent_id = kill_background_process",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

manage_own_calls_status = {
    parent: manage_own_calls,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = manage_own_calls_status",
        leaf: "parent_id = manage_own_calls",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

modify_audio_settings_status = {
    parent: modify_audio_settings,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = modify_audio_settings_status",
        leaf: "parent_id = modify_audio_settings",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

nfc_status = {
    parent: nfc,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = nfc_status",
        leaf: "parent_id = nfc",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

read_sync_settings_status = {
    parent: read_sync_settings,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = read_sync_settings_status",
        leaf: "parent_id = read_sync_settings",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

read_sync_stats_status = {
    parent: read_sync_stats,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = read_sync_stats_status",
        leaf: "parent_id = read_sync_stats",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

receive_boot_completed_status = {
    parent: receive_boot_completed,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = receive_boot_completed_status",
        leaf: "parent_id = receive_boot_completed",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

reorder_tasks_status = {
    parent: reorder_tasks,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = reorder_tasks_status",
        leaf: "parent_id = reorder_tasks",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

request_companion_run_in_background_status = {
    parent: request_companion_run_in_background,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = request_companion_run_in_background_status",
        leaf: "parent_id = request_companion_run_in_background",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

request_companion_use_data_in_background_status = {
    parent: request_companion_use_data_in_background,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = request_companion_use_data_in_background_status",
        leaf: "parent_id = request_companion_use_data_in_background",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

request_delete_packages_status = {
    parent: request_delete_packages,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = request_delete_packages_status",
        leaf: "parent_id = request_delete_packages",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

request_ignore_battery_optimizations_status = {
    parent: request_ignore_battery_optimizations,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = request_ignore_battery_optimizations_status",
        leaf: "parent_id = request_ignore_battery_optimizations",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

set_alarm_status = {
    parent: set_alarm,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = set_alarm_status",
        leaf: "parent_id = set_alarm",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

set_wallpaper_status = {
    parent: set_wallpaper,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = set_wallpaper_status",
        leaf: "parent_id = set_wallpaper",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

set_wallpaper_hints_status = {
    parent: set_wallpaper_hints,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = set_wallpaper_hints_status",
        leaf: "parent_id = set_wallpaper_hints",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

transmit_ir_status = {
    parent: transmit_ir,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = transmit_ir_status",
        leaf: "parent_id = transmit_ir",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

use_fingerprint_status = {
    parent: use_fingerprint,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = use_fingerprint_status",
        leaf: "parent_id = use_fingerprint",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

vibrate_status = {
    parent: vibrate,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = vibrate_status",
        leaf: "parent_id = vibrate",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

wake_lock_status = {
    parent: wake_lock,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = wake_lock_status",
        leaf: "parent_id = wake_lock",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

write_sync_settings_status = {
    parent: write_sync_settings,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = write_sync_settings_status",
        leaf: "parent_id = write_sync_settings",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

// Grandchildren of protection_signature_permissions

bind_accessibility_service_status = {
    parent: bind_accessibility_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_accessibility_service_status",
        leaf: "parent_id = bind_accessibility_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_autofill_service_status = {
    parent: bind_autofill_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_autofill_service_status",
        leaf: "parent_id = bind_autofill_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_carrier_services_status = {
    parent: bind_carrier_services,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_carrier_services_status",
        leaf: "parent_id = bind_carrier_services",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_chooser_target_service_status = {
    parent: bind_chooser_target_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_chooser_target_service_status",
        leaf: "parent_id = bind_chooser_target_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_condition_provider_service_status = {
    parent: bind_condition_provider_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_condition_provider_service_status",
        leaf: "parent_id = bind_condition_provider_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_device_admin_status = {
    parent: bind_device_admin,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_device_admin_status",
        leaf: "parent_id = bind_device_admin",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_dream_service_status = {
    parent: bind_dream_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_dream_service_status",
        leaf: "parent_id = bind_dream_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_incall_service_status = {
    parent: bind_incall_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_incall_service_status",
        leaf: "parent_id = bind_incall_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_input_method_status = {
    parent: bind_input_method,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_input_method_status",
        leaf: "parent_id = bind_input_method",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_midi_device_service_status = {
    parent: bind_midi_device_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_midi_device_service_status",
        leaf: "parent_id = bind_midi_device_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_nfc_service_status = {
    parent: bind_nfc_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_nfc_service_status",
        leaf: "parent_id = bind_nfc_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_notification_listener_service_status = {
    parent: bind_notification_listener_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_notification_listener_service_status",
        leaf: "parent_id = bind_notification_listener_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_print_service_status = {
    parent: bind_print_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_print_service_status",
        leaf: "parent_id = bind_print_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_screening_service_status = {
    parent: bind_screening_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_screening_service_status",
        leaf: "parent_id = bind_screening_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_telecom_connection_service_status = {
    parent: bind_telecom_connection_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_telecom_connection_service_status",
        leaf: "parent_id = bind_telecom_connection_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_text_service_status = {
    parent: bind_text_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_text_service_status",
        leaf: "parent_id = bind_text_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_tv_input_status = {
    parent: bind_tv_input,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_tv_input_status",
        leaf: "parent_id = bind_tv_input",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_visual_voicemail_service_status = {
    parent: bind_visual_voicemail_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_visual_voicemail_service_status",
        leaf: "parent_id = bind_visual_voicemail_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_voice_interaction_status = {
    parent: bind_voice_interaction,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_voice_interaction_status",
        leaf: "parent_id = bind_voice_interaction",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_vpn_service_status = {
    parent: bind_vpn_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_vpn_service_status",
        leaf: "parent_id = bind_vpn_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_vr_listener_service_status = {
    parent: bind_vr_listener_service,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_vr_listener_service_status",
        leaf: "parent_id = bind_vr_listener_service",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

bind_wallpaper_status = {
    parent: bind_wallpaper,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = bind_wallpaper_status",
        leaf: "parent_id = bind_wallpaper",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

clear_app_cache_status = {
    parent: clear_app_cache,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = clear_app_cache_status",
        leaf: "parent_id = clear_app_cache",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

manage_documents_status = {
    parent: manage_documents,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = manage_documents_status",
        leaf: "parent_id = manage_documents",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

read_voicemail_status = {
    parent: read_voicemail,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = read_voicemail_status",
        leaf: "parent_id = read_voicemail",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

request_install_packages_status = {
    parent: request_install_packages,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = request_install_packages_status",
        leaf: "parent_id = request_install_packages",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

/*
system_alert_window_status = {
    parent: system_alert_window,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = system_alert_window_status",
        leaf: "parent_id = system_alert_window",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

*/

/*
write_settings_status = {
    parent: write_settings,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = write_settings_status",
        leaf: "parent_id = write_settings",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},
*/

write_voicemail_status = {
    parent: write_voicemail,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = write_voicemail_status",
        leaf: "parent_id = write_voicemail",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

// Grandchildren of dangerous_permissions

read_calendar = {
    parent: calendar_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = read_calendar",
        parent: "parent_id = calendar_permissions"
    },
    collapsed: true
},

write_calendar = {
    parent: calendar_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = write_calendar",
        parent: "parent_id = calendar_permissions"
    },
    collapsed: true
},

read_call_log = {
    parent: call_log_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = read_call_log",
        parent: "parent_id = call_log_permissions"
    },
    collapsed: true
},

write_call_log = {
    parent: call_log_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = write_call_log",
        parent: "parent_id = call_log_permissions"
    },
    collapsed: true
},

process_outgoing_calls = {
    parent: call_log_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = process_outgoing_calls",
        parent: "parent_id = call_log_permissions"
    },
    collapsed: true
},

camera = {
    parent: camera_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = camera",
        parent: "parent_id = camera_permissions"
    },
    collapsed: true
},

read_contacts = {
    parent: contacts_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = read_contacts",
        parent: "parent_id = contacts_permissions"
    },
    collapsed: true
},

write_contacts = {
    parent: contacts_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = write_contacts",
        parent: "parent_id = contacts_permissions"
    },
    collapsed: true
},

get_accounts = {
    parent: contacts_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = get_accounts",
        parent: "parent_id = contacts_permissions"
    },
    collapsed: true
},

access_fine_location = {
    parent: location_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = access_fine_location",
        parent: "parent_id = location_permissions"
    },
    collapsed: true
},

access_coarse_location = {
    parent: location_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = access_coarse_location",
        parent: "parent_id = location_permissions"
    },
    collapsed: true
},

record_audio = {
    parent: microphone_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = record_audio",
        parent: "parent_id = microphone_permissions"
    },
    collapsed: true
},

read_phone_state = {
    parent: phone_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = read_phone_state",
        parent: "parent_id = phone_permissions"
    },
    collapsed: true
},

read_phone_numbers = {
    parent: phone_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = read_phone_numbers",
        parent: "parent_id = phone_permissions"
    },
    collapsed: true
},

call_phone = {
    parent: phone_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = call_phone",
        parent: "parent_id = phone_permissions"
    },
    collapsed: true
},

answer_phone_calls = {
    parent: phone_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = answer_phone_calls",
        parent: "parent_id = phone_permissions"
    },
    collapsed: true
},

add_voicemail = {
    parent: phone_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = add_voicemail",
        parent: "parent_id = phone_permissions"
    },
    collapsed: true
},

use_sip = {
    parent: phone_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = use_sip",
        parent: "parent_id = phone_permissions"
    },
    collapsed: true
},

body_sensors = {
    parent: sensors_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = body_sensors",
        parent: "parent_id = sensors_permissions"
    },
    collapsed: true
},

send_sms = {
    parent: sms_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = send_sms",
        parent: "parent_id = sms_permissions"
    },
    collapsed: true
},

receive_sms = {
    parent: sms_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = receive_sms",
        parent: "parent_id = sms_permissions"
    },
    collapsed: true
},

read_sms = {
    parent: sms_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = read_sms",
        parent: "parent_id = sms_permissions"
    },
    collapsed: true
},

receive_wap_push = {
    parent: sms_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = receive_wap_push",
        parent: "parent_id = sms_permissions"
    },
    collapsed: true
},

receive_mms = {
    parent: sms_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = receive_mms",
        parent: "parent_id = sms_permissions"
    },
    collapsed: true
},

read_external_storage = {
    parent: storage_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = read_external_storage",
        parent: "parent_id = storage_permissions"
    },
    collapsed: true
},

write_external_storage = {
    parent: storage_permissions,
    HTMLclass: "aso-leaf",
    text: {
        title: "leaf",
        id: "id = write_external_storage",
        parent: "parent_id = storage_permissions"
    },
    collapsed: true
},

// Grandchildren of special_permissions

system_alert_window_status = {
    parent: system_alert_window,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = system_alert_window_status",
        leaf: "parent_id = system_alert_window",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

write_settings_status = {
    parent: write_settings,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = write_settings_status",
        leaf: "parent_id = write_settings",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

// Level 6
// Greatgrandchildren of dangerous_permissions

read_calendar_status = {
    parent: read_calendar,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = read_calendar_status",
        leaf: "parent_id = read_calendar",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

write_calendar_status = {
    parent: write_calendar,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = write_calendar_status",
        leaf: "parent_id = write_calendar",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

read_call_log_status = {
    parent: read_call_log,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = read_call_log_status",
        leaf: "parent_id = read_call_log",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

write_call_log_status = {
    parent: write_call_log,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = write_call_log_status",
        leaf: "parent_id = write_call_log",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

process_outgoing_calls_status = {
    parent: process_outgoing_calls,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = process_outgoing_calls_status",
        leaf: "parent_id = process_outgoing_calls",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

camera_status = {
    parent: camera,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = camera_status",
        leaf: "parent_id = camera",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

read_contacts_status = {
    parent: read_contacts,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = read_contacts_status",
        leaf: "parent_id = read_contacts",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

write_contacts_status = {
    parent: write_contacts,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = write_contacts_status",
        leaf: "parent_id = write_contacts",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

get_accounts_status = {
    parent: get_accounts,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = get_accounts_status",
        leaf: "parent_id = get_accounts",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

access_fine_location_status = {
    parent: access_fine_location,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = access_fine_location_status",
        leaf: "parent_id = access_fine_location",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

access_coarse_location_status = {
    parent: access_coarse_location,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = access_coarse_location_status",
        leaf: "parent_id = access_coarse_location",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

record_audio_status = {
    parent: record_audio,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = record_audio_status",
        leaf: "parent_id = record_audio",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

read_phone_state_status = {
    parent: read_phone_state,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = read_phone_state_status",
        leaf: "parent_id = read_phone_state",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

read_phone_numbers_status = {
    parent: read_phone_numbers,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = read_phone_numbers_status",
        leaf: "parent_id = read_phone_numbers",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

call_phone_status = {
    parent: call_phone,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = call_phone_status",
        leaf: "parent_id = call_phone",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

answer_phone_calls_status = {
    parent: answer_phone_calls,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = answer_phone_calls_status",
        leaf: "parent_id = answer_phone_calls",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

add_voicemail_status = {
    parent: add_voicemail,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = add_voicemail_status",
        leaf: "parent_id = add_voicemail",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

use_sip_status = {
    parent: use_sip,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = use_sip_status",
        leaf: "parent_id = use_sip",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

body_sensors_status = {
    parent: body_sensors,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = body_sensors_status",
        leaf: "parent_id = body_sensors",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

send_sms_status = {
    parent: send_sms,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = send_sms_status",
        leaf: "parent_id = send_sms",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

receive_sms_status = {
    parent: receive_sms,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = receive_sms_status",
        leaf: "parent_id = receive_sms",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

read_sms_status = {
    parent: read_sms,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = read_sms_status",
        leaf: "parent_id = read_sms",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

receive_wap_push_status = {
    parent: receive_wap_push,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = receive_wap_push_status",
        leaf: "parent_id = receive_wap_push",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

receive_mms_status = {
    parent: receive_mms,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = receive_mms_status",
        leaf: "parent_id = receive_mms",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

read_external_storage_status = {
    parent: read_external_storage,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = read_external_storage_status",
        leaf: "parent_id = read_external_storage",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

write_external_storage_status = {
    parent: write_external_storage,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = write_external_storage_status",
        leaf: "parent_id = write_external_storage",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 1",
        miii: "miii = 1",
        mxii: "mxii = 1",
    },
},

// Grandchildren of cleartext_protocols

plain_http_observed = {
    parent: plain_http,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = plain_http_observed",
        leaf: "parent_id = plain_http",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 10",
        miii: "miii = 4",
        mxii: "mxii = 10",
    },
},

plain_dns_observed = {
    parent: plain_dns,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = plain_dns_observed",
        leaf: "parent_id = plain_dns",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 10",
        miii: "miii = 4",
        mxii: "mxii = 10",
    },
},

plain_ftp_observed = {
    parent: plain_ftp,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = plain_ftp_observed",
        leaf: "parent_id = plain_ftp",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 10",
        miii: "miii = 4",
        mxii: "mxii = 10",
    },
},

custom_socket_protocol_observed = {
    parent: custom_socket_protocol,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = custom_socket_protocol_observed",
        leaf: "parent_id = custom_socket_protocol",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 10",
        miii: "miii = 4",
        mxii: "mxii = 10",
    },
},

// Grandchildren of weak_or_insecure_protocols

ssl3_0_observed = {
    parent: ssl3_0,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = ssl3_0_observed",
        leaf: "parent_id = ssl3_0",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 9",
        miii: "miii = 2",
        mxii: "mxii = 10",
    },
},

tls1_0_observed = {
    parent: tls1_0,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = tls1_0_observed",
        leaf: "parent_id = tls1_0",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 9",
        miii: "miii = 2",
        mxii: "mxii = 10",
    },
},

tls1_1_observed = {
    parent: tls1_1,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = tls1_1_observed",
        leaf: "parent_id = tls1_1",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 9",
        miii: "miii = 2",
        mxii: "mxii = 10",
    },
},

// Grandchildren of weak_or_insecure_protocol_parameters

weak_or_broken_ciphersuites_instances = {
    parent: weak_or_broken_ciphersuites,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = weak_or_broken_ciphersuites_instances",
        leaf: "parent_id = weak_or_broken_ciphersuites",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 9",
        miii: "miii = 2",
        mxii: "mxii = 10",
    },
},

weak_or_broken_kex_instances = {
    parent: weak_or_broken_kex,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = weak_or_broken_kex_instances",
        leaf: "parent_id = weak_or_broken_kex",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 9",
        miii: "miii = 2",
        mxii: "mxii = 10",
    },
},

unsafe_negotiation_instances = {
    parent: unsafe_negotiation,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = unsafe_negotiation_instances",
        leaf: "parent_id = unsafe_negotiation",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 9",
        miii: "miii = 2",
        mxii: "mxii = 10",
    },
},

insufficient_identity_validation_instances = {
    parent: insufficient_identity_validation,
    HTMLclass: "aso-state-variable",
    text: {
        title: "state_variable",
        id: "id = insufficient_identity_validation_instances",
        leaf: "parent_id = insufficient_identity_validation",
        value: "value = <UNASSIGNED>",
        history: "history = []",
        ari: "ari = 9",
        miii: "miii = 2",
        mxii: "mxii = 10",
    },
},

// All nodes

chart_config = [config, android_app, app_behaviours, app_data_storage, app_features, app_risks, app_metadata, app_permissions, app_reputation,
    send_sms_behaviour, initiate_call_behaviour, network_activity, app_preferences, app_internal_storage, external_storage, app_vulnerabilities,
    app_risky_components, high_sms_frequency, sms_to_known_dodgy_numbers, high_call_frequency, call_to_known_dodgy_numbers, connection_to_dodgy_servers,
    unsafe_protocols, excessive_preferences_size, excessive_internal_storage_size, unneeded_access_to_external_storage, excessive_occupation_of_external_storage,
    app_info, protection_normal_permissions, protection_signature_permissions, dangerous_permissions, special_permissions, known_malware, heuristic_malware,
    known_vulnerable_libraries, unneeded_permissions, webviews, connection_to_dodgy_server, cleartext_protocols, weak_or_broken_protocols, weak_or_broken_protocol_parameters,
    access_location_extra_commands, access_network_state, access_notification_policy, access_wifi_state, bluetooth, bluetooth_admin, broadcast_sticky,
    change_network_state, change_wifi_multicast_state, change_wifi_state, disable_keyguard, expand_status_bar, foreground_service, get_package_size,
    install_shortcut, internet, kill_background_process, manage_own_calls, modify_audio_settings, nfc, read_sync_settings, read_sync_stats,
    receive_boot_completed, reorder_tasks, request_companion_run_in_background, request_companion_use_data_in_background, request_delete_packages,
    request_ignore_battery_optimizations, set_alarm, set_wallpaper, set_wallpaper_hints, transmit_ir, use_fingerprint, vibrate, wake_lock, write_sync_settings,
    bind_accessibility_service, bind_autofill_service, bind_carrier_services, bind_chooser_target_service, bind_condition_provider_service, bind_device_admin,
    bind_dream_service, bind_incall_service, bind_input_method, bind_midi_device_service, bind_nfc_service, bind_notification_listener_service,
    bind_print_service, bind_screening_service, bind_telecom_connection_service, bind_text_service, bind_tv_input, bind_visual_voicemail_service,
    bind_voice_interaction, bind_vpn_service, bind_vr_listener_service, bind_wallpaper, clear_app_cache, manage_documents, read_voicemail,
    request_install_packages, system_alert_window, write_settings, write_voicemail, calendar_permissions, call_log_permissions, camera_permissions,
    contacts_permissions, location_permissions, microphone_permissions, phone_permissions, sensors_permissions, sms_permissions, storage_permissions,
    vulnerable_library_instances, unneeded_permissions_instances, too_broad_js_interfaces, system_alert_window_status, write_settings_status,
    access_location_extra_commands_status, access_network_state_status, access_notification_policy_status, access_wifi_state_status, bluetooth_status,
    bluetooth_admin_status, broadcast_sticky_status, change_network_state_status, change_wifi_multicast_state_status, change_wifi_state_status,
    disable_keyguard_status, expand_status_bar_status, foreground_service_status, get_package_size_status, install_shortcut_status, internet_status,
    kill_background_process_status, manage_own_calls_status, modify_audio_settings_status, nfc_status, read_sync_settings_status, read_sync_stats_status,
    receive_boot_completed_status, reorder_tasks_status, request_companion_run_in_background_status, request_companion_use_data_in_background_status,
    request_delete_packages_status, request_ignore_battery_optimizations_status, set_alarm_status, set_wallpaper_status, set_wallpaper_hints_status,
    transmit_ir_status, use_fingerprint_status, vibrate_status, wake_lock_status, write_sync_settings_status, bind_accessibility_service_status,
    bind_autofill_service_status, bind_carrier_services_status, bind_chooser_target_service_status, bind_condition_provider_service_status,
    bind_device_admin_status, bind_dream_service_status, bind_incall_service_status, bind_input_method_status, bind_midi_device_service_status,
    bind_nfc_service_status, bind_notification_listener_service_status, bind_print_service_status, bind_screening_service_status,
    bind_telecom_connection_service_status, bind_text_service_status, bind_tv_input_status, bind_visual_voicemail_service_status,
    bind_voice_interaction_status, bind_vpn_service_status, bind_vr_listener_service_status, bind_wallpaper_status, clear_app_cache_status,
    manage_documents_status, read_voicemail_status, request_install_packages_status, system_alert_window_status, write_settings_status,
    write_voicemail_status, read_calendar, write_calendar, read_call_log, write_call_log, process_outgoing_calls, camera, read_contacts, write_contacts,
    get_accounts, access_fine_location, access_coarse_location, record_audio, read_phone_state, read_phone_numbers, call_phone, answer_phone_calls,
    add_voicemail, use_sip, body_sensors, send_sms, receive_sms, read_sms, receive_wap_push, receive_mms, read_external_storage, write_external_storage,
    read_calendar_status, write_calendar_status, read_call_log_status, write_call_log_status, process_outgoing_calls_status, camera_status,
    read_contacts_status, write_contacts_status, get_accounts_status, access_fine_location_status, access_coarse_location_status, record_audio_status,
    read_phone_state_status, read_phone_numbers_status, call_phone_status, answer_phone_calls_status, add_voicemail_status, use_sip_status,
    body_sensors_status, send_sms_status, receive_sms_status, read_sms_status, receive_wap_push_status, receive_mms_status, read_external_storage_status,
    write_external_storage_status, plain_http, plain_dns, plain_ftp, custom_socket_protocol, ssl3_0, tls1_0, tls1_1, weak_or_broken_ciphersuites,
    weak_or_broken_kex, unsafe_negotiation, insufficient_identity_validation, plain_http_observed, plain_dns_observed, plain_ftp_observed,
    custom_socket_protocol_observed, ssl3_0_observed, tls1_0_observed, tls1_1_observed, weak_or_broken_ciphersuites_instances, weak_or_broken_kex_instances,
    unsafe_negotiation_instances, insufficient_identity_validation_instances]