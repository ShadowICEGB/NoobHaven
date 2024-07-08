import { setRouteData } from "$lib/store";
import type { routeType } from "$lib/store";
import { page } from '$app/stores';
import { get } from "svelte/store";

export function customizeRouteData() {
    const currentRoute: string = get(page).url.pathname;
    console.log(currentRoute);
    

    const newRouteData: routeType = {
        route: currentRoute,
        routeName: "",
        routeSubText: "",
        subHeader: ""
    };

    switch (currentRoute) {
        case "/":
            newRouteData.routeName = "NOOB Haven";
            newRouteData.routeSubText = "The Ultimate Gaming Hub";
            newRouteData.subHeader = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum aspernatur nisi iste odit eligendi perferendis nostrum, ";
            break;
        case "/libary/changelogs":
            newRouteData.routeName = "Changelogs";
            newRouteData.routeSubText = "The Ultimate Gaming Hub";
            newRouteData.subHeader = "Here, you can see detailed information about new features, bug fixes, security updates, and other improvements. Developers use these pages to keep users informed about the latest developments and enhancements.";
            break;
        // Weitere Routen hier hinzufügen
        default:
            newRouteData.routeName = "Unknown Route";
            newRouteData.routeSubText = "Page not found";
            newRouteData.subHeader = "Sorry, we couldn't find what you're looking for.";
    }

    setRouteData(newRouteData);
}
