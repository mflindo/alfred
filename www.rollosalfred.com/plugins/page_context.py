#coding:utf-8
def cine_gallery():
    return ["%.2d" % i for i in range(1, 30)]

def bn_gallery():
    return ["%.2d" % i for i in range(1, 42)]

def aom_gallery():
    return ["%.2d" % i for i in range(1, 27)]

def reserva_gallery():
    return ["%.2d" % i for i in range(1, 38)]

def preBuildPage(page, context, data):
    """
    Updates the context of the page to include: the page itself as {{ CURRENT_PAGE }}
    """

    # This will run for each page that Cactus renders.
    # Any changes you make to context will be passed to the template renderer for this page.

    extra = {
        "CURRENT_PAGE": page,
        "CINE_GALLERY": cine_gallery(),
        "BN_GALLERY": bn_gallery(),
        "AOM_GALLERY": aom_gallery(),
        "RESERVA_GALLERY": reserva_gallery()
        # Add your own dynamic context elements here!
    }

    context.update(extra)
    return context, data
